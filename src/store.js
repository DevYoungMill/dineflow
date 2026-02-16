import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menu/menuSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: { menu: menuReducer, cart: cartReducer },
});

store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem('dineflow_cart', JSON.stringify(state.cart));
  } catch {
    // ignore storage errors
  }
});

export default store;
