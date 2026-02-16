import store from '../../store';
import { fetchMenu } from './menuSlice';

export const menuLoader = async () => {
  const state = store.getState();

  if (state.menu.items.length === 0 && !state.menu.loading) {
    store.dispatch(fetchMenu());
  }

  return null;
};
