import supabase from './supabase';

export const signUp = async ({
  fullName,
  email,
  password,
  phone,
  avatar, // file object
}) => {
  // 1️⃣ Create Auth User
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  const user = authData.user;
  if (!user) throw new Error('User not created');

  let avatarUrl = null;

  // 2️⃣ Upload Avatar (if provided)
  if (avatar) {
    const fileExt = avatar.name.split('.').pop();
    const fileName = `avatar-${user.id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(fileName, avatar, {
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(fileName);

    avatarUrl = publicUrlData.publicUrl;
  }

  // 3️⃣ Insert Profile
  const { error: profileError } = await supabase.from('profiles').insert([
    {
      id: user.id,
      fullName,
      email,
      phone,
      avatarUrl,
      role: 'client',
    },
  ]);

  if (profileError) throw profileError;

  return authData;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem('dineflow:user-cache');
  }
};

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data?.session || null;
};

export const getCurrentUserWithProfile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) throw error;

  return {
    ...user,
    profile,
  };
};
