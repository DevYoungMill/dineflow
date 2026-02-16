import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartTotals } from '../features/cart/cartSlice';

export default function CartIndicator() {
  const { totalQty, totalAmount } = useSelector(selectCartTotals);
  const distinctCount = useSelector((state) => state.cart.items.length);

  if (totalQty <= 0) return null;

  return (
    <Link
      to="/checkout"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-2xl bg-white/95 dark:bg-surface-dark/95 border border-primary/30 shadow-lg px-4 py-3 backdrop-blur-md"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white">
        <span className="material-symbols-outlined text-[20px]">
          shopping_cart
        </span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xs text-secondary/60 dark:text-gray-400">
          {distinctCount} {distinctCount === 1 ? 'item' : 'items'}
        </span>
        <span className="font-heading font-bold text-secondary dark:text-white text-sm">
          ${totalAmount.toFixed(2)}
        </span>
      </div>
      <div className="text-primary text-xs font-semibold">Checkout</div>
    </Link>
  );
}
