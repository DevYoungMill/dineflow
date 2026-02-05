import { useState } from 'react';
import Button from '../../components/Button';
import { users } from '../user/users';
import UserStats from '../user/UsersStats';
import UserTable from '../user/UserTable';
import EditUserModal from '../../components/EditUserModal';

function Users() {
  const [seletedUser, setSelectedUSer] = useState(null);
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Settings</span>
            <span className="material-icons-round text-base mx-1">
              chevron_right
            </span>
            <span className="text-primary font-medium">User & Roles</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Manage users and permissions
          </h2>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <Button type="secondary" size="small">
            <span class="material-icons-round text-lg mr-2 text-slate-600">
              download
            </span>
            <span className="text-slate-600">Export</span>
          </Button>
          <Button size="small">
            <span class="material-icons-round text-lg mr-2">person_add</span>
            <span>Add User</span>
          </Button>
        </div>
      </div>

      {/* Users */}
      <UserStats />
      <UserTable users={users} onEdit={setSelectedUSer} />
      {seletedUser && (
        <EditUserModal
          user={seletedUser}
          onClose={() => setSelectedUSer(null)}
        />
      )}
    </div>
  );
}

export default Users;
