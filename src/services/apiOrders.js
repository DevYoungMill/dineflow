import supabase from './supabase';
import {
  buildDraftOrders,
  PRIMARY_CLIENT_EMAILS,
  PROFILE_AVATAR_BY_EMAIL,
} from './draft';

export const getOrdersByUser = async (userId) => {
  const { data, error } = await supabase
    .from('orders')
    .select('*, orderItems(*)')
    .eq('userId', userId)
    .order('createdAt', { ascending: false });

  if (error) throw error;
  return data;
};

export const createOrder = async (orderData) => {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const runDraftAction = async () => {
  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .select('id, email')
    .in('email', PRIMARY_CLIENT_EMAILS);

  if (profilesError) throw profilesError;

  const profileByEmail = new Map(
    (profiles || []).map((profile) => [profile.email, profile]),
  );

  // Keep avatars aligned with the provided seed data.
  for (const [email, avatarUrl] of Object.entries(PROFILE_AVATAR_BY_EMAIL)) {
    const profile = profileByEmail.get(email);
    if (!profile) continue;

    const { error } = await supabase
      .from('profiles')
      .update({ avatarUrl })
      .eq('id', profile.id);

    if (error) throw error;
  }

  const availableEmails = Array.from(profileByEmail.keys());
  const draftOrders = buildDraftOrders(availableEmails);

  const mappedOrders = draftOrders
    .map((order) => ({
      draft: order,
      profile: profileByEmail.get(order.email) || null,
    }))
    .filter((entry) => entry.profile);

  if (!mappedOrders.length) {
    throw new Error('No matching profiles found for draft action.');
  }

  let inserted = 0;
  let insertedItems = 0;

  for (const entry of mappedOrders) {
    const orderPayload = {
      userId: entry.profile.id,
      status: entry.draft.status,
      orderType: entry.draft.orderType,
      totalAmount: Number(entry.draft.totalAmount.toFixed(2)),
      createdAt: entry.draft.createdAt,
    };

    const { data: insertedOrder, error: orderError } = await supabase
      .from('orders')
      .insert([orderPayload])
      .select('id, totalAmount')
      .single();

    if (orderError) throw orderError;

    inserted += 1;

    const sourceItems = Array.isArray(entry.draft.items) ? entry.draft.items : [];
    const normalizedItems = sourceItems.length
      ? sourceItems
      : [{ qty: 1, name: `${entry.draft.orderType} item`, note: null }];

    const quantitySum = normalizedItems.reduce(
      (sum, item) => sum + Number(item.qty || 1),
      0,
    );
    const unitPrice = quantitySum
      ? Number((Number(insertedOrder.totalAmount) / quantitySum).toFixed(2))
      : Number(insertedOrder.totalAmount);

    const orderItemRows = normalizedItems.map((item) => ({
      orderId: insertedOrder.id,
      quantity: Number(item.qty || 1),
      price: unitPrice,
      note: item.note ? `${item.name} - ${item.note}` : item.name,
    }));

    const { error: itemError } = await supabase
      .from('orderItems')
      .insert(orderItemRows);

    if (itemError) throw itemError;

    insertedItems += orderItemRows.length;
  }

  return {
    inserted,
    insertedItems,
    mappedProfiles: profileByEmail.size,
  };
};
