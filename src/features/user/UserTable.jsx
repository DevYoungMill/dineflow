import { useState } from 'react';
import Controls from '../../components/Controls';
import UsersFilterBar from './UsersFilterbar';
import Pagination from '../../components/Pagination';

function UserTable({ users, onEdit }) {
  const [activeRole, setActiveRole] = useState('All Users');

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 overflow-hidden">
      <UsersFilterBar activeRole={activeRole} setActiveRole={setActiveRole} />
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr className="text-xs text-slate-500 border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-4 font-semibold uppercase">User</th>
              <th className="px-6 py-4 font-semibold uppercase">Role</th>
              <th className="px-6 py-4 font-semibold uppercase">Status</th>
              <th className="px-6 py-4 font-semibold uppercase whitespace-nowrap">
                Last Active
              </th>
              <th className="px-6 py-4 font-semibold uppercase text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors border-b border-slate-100 dark:border-slate-800"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={user.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full border mr-3"
                    />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-xs font-bold text-stone-700">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`${
                      user.status === 'active'
                        ? 'text-emerald-600'
                        : 'text-slate-500'
                    } text-xs font-bold capitalize`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                  {user.lastActive}
                </td>

                <td className="px-6 py-4 flex justify-center">
                  <Controls
                    item={user}
                    onEdit={() => onEdit(user)}
                    onDelete={() => console.log('Delete')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}

export default UserTable;
