import { useState } from 'react';
import Pagination from '../../components/Pagination';
import CustomerTableHeader from './Header';
import { customerOrders } from './customerOrders';
import { getStatusBadgeClass } from '../../utils/statusStyles';
import Controls from '../../components/Controls';

function Customers() {
  const [orders, setOrders] = useState(customerOrders);

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex flex-col">
      <CustomerTableHeader />

      {/* Table */}

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-800/50 sticky top-0 z-10">
            <tr className="text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
              <th className="p-4 text-center">ORDER ID</th>
              <th className="p-4 text-center">CUSTOMER</th>
              <th className="p-4">DATE & TIME</th>
              <th className="p-4">AMOUNT</th>
              <th className="p-4 text-center">STATUS</th>
              <th className="p-4 text-center">ACTIONS</th>
            </tr>
          </thead>

          <tbody className="p-2 text-sm divide-y divide-slate-100 dark:divide-slate-800">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <td className="p-4 font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                  #{order.id}
                </td>

                <td className="p-4">
                  <div className="flex items-center whitespace-nowrap">
                    {order.avatar ? (
                      <img
                        src={order.avatar}
                        alt="User"
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-xs font-bold mr-3">
                        {order.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-200">
                        {order.customer}
                      </p>
                      <p className="text-xs text-slate-500">{order.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-slate-500 whitespace-nowrap">
                  <div className="flex flex-col leading-tight">
                    <span>{order.date}</span>
                    <span className="text-xs">{order.time}</span>
                  </div>
                </td>

                <td className="p-4 font-bold text-slate-700 dark:text-slate-200">
                  {order.amount}
                </td>

                <td className="p-4 text-center">
                  <span
                    className={`inline-flex items-center capitalize px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusBadgeClass(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">
                  <Controls
                    item={order}
                    onView={() => console.log('View')}
                    onEdit={() => console.log('Edit')}
                    onDelete={() => console.log('Delete')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <Pagination />
    </div>
  );
}

export default Customers;
