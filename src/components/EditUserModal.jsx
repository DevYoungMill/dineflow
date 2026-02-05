import Button from './Button';
import Permissions from './Permissions';

function EditUserModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md">
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col h-fit sticky top-24">
          {/* Header */}
          <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-700/50 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <h3 className="font-bold text-slate-800 dark:text-white">
                Edit Permissions
              </h3>
              <span className="text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800 font-bold">
                {user?.name}
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <span className="material-icons-round">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-3 space-y-6">
            {/* Role */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                Assigned Role
              </label>
              <div className="relative">
                <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none">
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Delivery Agent</option>
                  <option>Customer Support</option>
                  <option>Customer</option>
                </select>

                <span className="material-icons-round absolute right-3 top-3 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Permissions */}
            <Permissions />
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/30 rounded-b-2xl">
            <div className="flex space-x-3 justify-between">
              <Button size="small" type="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button size="small" type="primary">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserModal;
