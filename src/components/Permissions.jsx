import { useState } from 'react';

const permissions = [
  {
    icon: 'receipt_long',
    title: 'View Orders',
    desc: 'Read-only access',
    active: true,
  },
  {
    icon: 'edit_note',
    title: 'Edit Orders',
    desc: 'Modify items/status',
    active: false,
  },
  {
    icon: 'local_shipping',
    title: 'Accept Delivery',
    desc: 'Self-assign orders',
    active: true,
  },
  {
    icon: 'delete',
    title: 'Delete Records',
    desc: 'Permanent removal',
    active: false,
  },
];

function Permissions() {
  const [items, setItems] = useState(permissions);

  const togglePermission = (index) => {
    const updated = [...items];
    updated[index].active = !updated[index].active;
    setItems(updated);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          Permissions
        </label>

        <button
          onClick={() =>
            setItems(items.map((item) => ({ ...item, active: false })))
          }
          className="text-xs text-primary font-bold hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Permission List */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => togglePermission(index)}
            className={`cursor-pointer p-3 rounded-xl flex items-center justify-between transition-all border 
              ${
                item.active
                  ? 'bg-primary/5 border-primary/20'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
              }
            `}
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg text-sm 
                  ${
                    item.active
                      ? 'bg-primary/10 text-primary'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                  }
                `}
              >
                <span className="material-icons-round text-base">
                  {item.icon}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {item.title}
                </p>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Toggle */}
            <div className="relative inline-flex items-center">
              <div
                className={`w-9 h-5 flex items-center rounded-full p-1 transition-all
                  ${item.active ? 'bg-emerald-500' : 'bg-slate-300'}
                `}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform transition-all
                    ${item.active ? 'translate-x-4' : ''}
                  `}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Permissions;
