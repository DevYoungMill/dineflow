import supabase from './supabase';

/**
 * Get all menu items
 */
export const getMenu = async () => {
  const { data, error } = await supabase
    .from('menu')
    .select('*, categories ( id, title, icon )')
    .order('created_at', { ascending: true });

  if (error) {
    console.warn(
      'Menu fetch with categories failed, falling back to base query:',
      error.message,
    );
    const fallback = await supabase
      .from('menu')
      .select('*')
      .order('created_at', { ascending: true });

    if (fallback.error) {
      console.error('Error fetching menu:', fallback.error.message);
      throw new Error(fallback.error.message);
    }

    return fallback.data;
  }

  return data;
};

/**
 * Get single menu item by ID
 */
export const getMenuItem = async (id) => {
  const { data, error } = await supabase
    .from('menu')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching menu item:', error.message);
    throw new Error(error.message);
  }

  return data;
};

/**
 * Create new menu item (Admin only)
 */
export const createMenuItem = async (item) => {
  const { data, error } = await supabase
    .from('menu')
    .insert([item])
    .select()
    .single();

  if (error) {
    console.error('Error creating menu item:', error.message);
    throw new Error(error.message);
  }

  return data;
};

/**
 * Update menu item
 */
export const updateMenuItem = async (id, updates) => {
  const { data, error } = await supabase
    .from('menu')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating menu item:', error.message);
    throw new Error(error.message);
  }

  return data;
};

/**
 * Delete menu item
 */
export const deleteMenuItem = async (id) => {
  const { error } = await supabase.from('menu').delete().eq('id', id);

  if (error) {
    console.error('Error deleting menu item:', error.message);
    throw new Error(error.message);
  }

  return true;
};
