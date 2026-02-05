import StatusColumn from '../../components/StatusColumn';
import { columns } from './orders';

export default function OrderBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 h-full overflow-hidden pb-4">
      {columns.map((column) => (
        <StatusColumn key={column.id} column={column} />
      ))}
    </div>
  );
}
