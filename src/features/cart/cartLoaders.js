import store from '../../store';
import { hydrateCart } from './cartSlice';

export const cartLoader = async () => {
  try {
    const raw = localStorage.getItem('dineflow_cart');
    if (raw) {
      const parsed = JSON.parse(raw);
      store.dispatch(hydrateCart(parsed));
    }
  } catch {
    // ignore storage errors
  }

  return null;
};
