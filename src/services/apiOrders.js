import supabase from './supabase';
import {
  buildDraftOrders,
  PRIMARY_CLIENT_EMAILS,
  PROFILE_AVATAR_BY_EMAIL,
} from './draft';

let ordersEmailColumnSupported;
let ordersOrderNumberColumnSupported;

async function supportsOrdersEmailColumn() {
  if (typeof ordersEmailColumnSupported === 'boolean') {
    return ordersEmailColumnSupported;
  }

  const { error } = await supabase.from('orders').select('email').limit(1);
  ordersEmailColumnSupported = !error;
  return ordersEmailColumnSupported;
}

async function supportsOrdersOrderNumberColumn() {
  if (typeof ordersOrderNumberColumnSupported === 'boolean') {
    return ordersOrderNumberColumnSupported;
  }

  const { error } = await supabase
    .from('orders')
    .select('orderNumber')
    .limit(1);
  ordersOrderNumberColumnSupported = !error;
  return ordersOrderNumberColumnSupported;
}

function normalizeEmail(value) {
  return String(value || '')
    .trim()
    .toLowerCase();
}

function normalizePhone(value) {
  return String(value || '').trim();
}

function normalizeName(value) {
  return String(value || '').trim();
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || '').trim(),
  );
}

function generateOrderNumberCandidate() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let value = '';
  for (let i = 0; i < 5; i += 1) {
    const index = Math.floor(Math.random() * chars.length);
    value += chars[index];
  }
  return value;
}

function generateOrderId() {
  if (typeof globalThis !== 'undefined' && globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `ord-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function fetchOrderByRef(queryBuilder, orderRef) {
  const normalizedRef = String(orderRef || '').trim();
  if (!normalizedRef) throw new Error('Order reference is required.');

  if (await supportsOrdersOrderNumberColumn()) {
    const { data, error } = await queryBuilder()
      .eq('orderNumber', normalizedRef.toUpperCase())
      .maybeSingle();

    if (error) throw error;
    if (data) return data;
  }

  // Avoid uuid parse errors when the ref is an alphanumeric orderNumber.
  if (!isUuid(normalizedRef)) {
    throw new Error('Order not found.');
  }

  const { data, error } = await queryBuilder()
    .eq('id', normalizedRef)
    .maybeSingle();
  if (error) throw error;
  if (data) return data;

  throw new Error('Order not found.');
}

export const getOrdersByUser = async (userId) => {
  const { data, error } = await supabase
    .from('orders')
    .select('*, orderItems(*)')
    .eq('userId', userId)
    .order('createdAt', { ascending: false });

  if (error) throw error;
  return data;
};

export const getClientOrders = async ({ userId, email }) => {
  const normalizedEmail = normalizeEmail(email);
  const query = supabase
    .from('orders')
    .select('*, orderItems(*)')
    .order('createdAt', { ascending: false });

  if (userId && normalizedEmail) {
    query.or(`userId.eq.${userId},email.eq.${normalizedEmail}`);
  } else if (userId) {
    query.eq('userId', userId);
  } else if (normalizedEmail) {
    query.eq('email', normalizedEmail);
  } else {
    return [];
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
};

export const getAllOrdersForAdmin = async () => {
  const { data, error } = await supabase
    .from('orders')
    .select('*, orderItems(*)')
    .order('createdAt', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const createOrder = async (orderData) => {
  const { error } = await supabase.from('orders').insert([orderData]);

  if (error) throw error;
  return orderData;
};

export const createOrderForUserEmail = async ({
  name,
  email,
  phone,
  orderType,
  tableNumber = null,
  totalAmount,
  status = 'new',
  items = [],
  userId = null,
  deliveryDetails = null,
}) => {
  const normalizedEmail = normalizeEmail(email);
  const normalizedName = normalizeName(name) || 'Guest';
  const normalizedPhone = normalizePhone(phone);

  if (!normalizedEmail) {
    throw new Error('Email is required to place an order.');
  }

  const orderId = generateOrderId();
  const orderNumber = generateOrderNumberCandidate();

  const orderPayload = {
    id: orderId,
    name: normalizedName,
    email: normalizedEmail,
    phone: normalizedPhone || null,
    tableNumber: tableNumber || null,
    orderNumber,
    status,
    orderType,
    totalAmount: Number(totalAmount || 0),
    createdAt: new Date().toISOString(),
  };

  if (userId) {
    orderPayload.userId = userId;
  }

  const { error: orderError } = await supabase.from('orders').insert([orderPayload]);

  if (orderError) throw orderError;

  const normalizedItems = Array.isArray(items)
    ? items
        .map((item) => ({
          orderId,
          quantity: Number(item.qty || item.quantity || 1),
          price: Number(item.price || 0),
          note:
            item.note ||
            item.name ||
            `${String(orderType || 'order').toLowerCase()} item`,
        }))
        .filter((item) => item.quantity > 0)
    : [];

  if (normalizedItems.length) {
    const { error: itemError } = await supabase
      .from('orderItems')
      .insert(normalizedItems);

    if (itemError) throw itemError;
  }

  if (orderType === 'delivery' && deliveryDetails) {
    const detailsPayload = {
      orderId,
      streetAddress: deliveryDetails.streetAddress || null,
      apartment: deliveryDetails.apartment || null,
      city: deliveryDetails.city || null,
      instructions: deliveryDetails.instructions || null,
    };

    const { error: detailsError } = await supabase
      .from('deliveryDetails')
      .insert([detailsPayload]);

    if (detailsError) throw detailsError;
  }

  return {
    id: orderId,
    orderNumber,
    userId: userId || null,
    name: normalizedName,
    email: normalizedEmail,
    phone: normalizedPhone || null,
    tableNumber: tableNumber || null,
    status,
    orderType,
    totalAmount: Number(totalAmount || 0),
    createdAt: orderPayload.createdAt,
  };
};

export const getOrderByIdForEmail = async (orderId, email) => {
  const normalizedEmail = normalizeEmail(email);

  if (!orderId) throw new Error('Order id is required.');
  if (!normalizedEmail) throw new Error('Email is required.');

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id')
    .eq('email', normalizedEmail)
    .maybeSingle();

  if (profileError) throw profileError;

  if (profile?.id) {
    try {
      const byUserId = await fetchOrderByRef(
        () =>
          supabase
            .from('orders')
            .select('*, orderItems(*)')
            .eq('userId', profile.id),
        orderId,
      );

      if (byUserId) return byUserId;
    } catch {
      // Fallback to direct email lookup.
    }
  }

  return fetchOrderByRef(
    () =>
      supabase
        .from('orders')
        .select('*, orderItems(*)')
        .eq('email', normalizedEmail),
    orderId,
  );
};

export const getOrderById = async (orderId) => {
  if (!orderId) throw new Error('Order id is required.');

  return fetchOrderByRef(
    () => supabase.from('orders').select('*, orderItems(*)'),
    orderId,
  );
};

export const claimGuestOrdersByEmail = async ({ email, userId }) => {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail || !userId) return 0;
  if (!(await supportsOrdersEmailColumn())) return 0;

  const { data, error } = await supabase
    .from('orders')
    .update({ userId })
    .eq('email', normalizedEmail)
    .is('userId', null)
    .select('id');

  if (error) throw error;
  return data?.length || 0;
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
      name: entry.profile.fullName || 'Guest',
      email: entry.profile.email,
      phone: entry.profile.phone || null,
    };

    const { data: insertedOrder, error: orderError } = await supabase
      .from('orders')
      .insert([orderPayload])
      .select('id, totalAmount')
      .single();

    if (orderError) throw orderError;

    inserted += 1;

    const sourceItems = Array.isArray(entry.draft.items)
      ? entry.draft.items
      : [];
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
