function Controls({ onView, onEdit, onDelete, item }) {
  return (
    <div className="flex items-center gap-1">
      {/* View */}
      {onView && (
        <button
          onClick={() => onView(item)}
          className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors"
        >
          <span className="material-icons-round text-[14px]">visibility</span>
        </button>
      )}

      {/* Edit */}
      {onEdit && (
        <button
          onClick={() => onEdit(item)}
          className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
        >
          <span className="material-icons-round text-[14px]">edit</span>
        </button>
      )}

      {/* Delete */}
      {onDelete && (
        <button
          onClick={() => onDelete(item)}
          className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <span className="material-icons-round text-[14px]">delete</span>
        </button>
      )}
    </div>
  );
}

export default Controls;
