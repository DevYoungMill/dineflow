import { createSlice } from '@reduxjs/toolkit';

const calculateTotals = (items) => {
  const totals = items.reduce(
    (acc, item) => {
      acc.totalQty += item.qty;
      acc.totalAmount += item.price * item.qty;
      return acc;
    },
    { totalQty: 0, totalAmount: 0 },
  );

  return totals;
};

const initialState = {
  items: [],
  totalQty: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrateCart: (state, action) => {
      if (action.payload) {
        state.items = action.payload.items || [];
        const totals = calculateTotals(state.items);
        state.totalQty = totals.totalQty;
        state.totalAmount = totals.totalAmount;
      }
    },
    addItem: (state, action) => {
      const incoming = action.payload;
      const existing = state.items.find((item) => item.id === incoming.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({
          id: incoming.id,
          name: incoming.name,
          price: Number(incoming.price) || 0,
          description: incoming.description,
          image: incoming.image,
          qty: 1,
        });
      }

      const totals = calculateTotals(state.items);
      state.totalQty = totals.totalQty;
      state.totalAmount = totals.totalAmount;
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) existing.qty += 1;

      const totals = calculateTotals(state.items);
      state.totalQty = totals.totalQty;
      state.totalAmount = totals.totalAmount;
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.qty -= 1;
        if (existing.qty <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }

      const totals = calculateTotals(state.items);
      state.totalQty = totals.totalQty;
      state.totalAmount = totals.totalAmount;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      const totals = calculateTotals(state.items);
      state.totalQty = totals.totalQty;
      state.totalAmount = totals.totalAmount;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  hydrateCart,
  addItem,
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotals = (state) => ({
  totalQty: state.cart.totalQty,
  totalAmount: state.cart.totalAmount,
});

export default cartSlice.reducer;
