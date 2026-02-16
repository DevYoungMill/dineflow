import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getMenu,
  getMenuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from '../../services/apiMenu';

/* ================================
   Async Thunks
================================ */

// Fetch all menu items
export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (_, { rejectWithValue }) => {
    try {
      return await getMenu();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Fetch single menu item
export const fetchMenuItem = createAsyncThunk(
  'menu/fetchMenuItem',
  async (id, { rejectWithValue }) => {
    try {
      return await getMenuItem(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Create new menu item
export const addMenuItem = createAsyncThunk(
  'menu/addMenuItem',
  async (item, { rejectWithValue }) => {
    try {
      return await createMenuItem(item);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Update menu item
export const editMenuItem = createAsyncThunk(
  'menu/editMenuItem',
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      return await updateMenuItem(id, updates);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Delete menu item
export const removeMenuItem = createAsyncThunk(
  'menu/removeMenuItem',
  async (id, { rejectWithValue }) => {
    try {
      await deleteMenuItem(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/* ================================
   Initial State
================================ */

const initialState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

/* ================================
   Slice
================================ */

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Menu
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Single Item
      .addCase(fetchMenuItem.fulfilled, (state, action) => {
        state.selectedItem = action.payload;
      })

      // Add Item
      .addCase(addMenuItem.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })

      // Update Item
      .addCase(editMenuItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Delete Item
      .addCase(removeMenuItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const { clearSelectedItem } = menuSlice.actions;

export default menuSlice.reducer;
