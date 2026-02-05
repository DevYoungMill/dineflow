function AddNewCard({ category }) {
  return (
    <button className="group bg-slate-50 dark:bg-surface-dark/40 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px]">
      <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="material-icons-round text-3xl text-slate-400 group-hover:text-primary">
          add
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
        Add New {category}
      </h3>

      <p className="text-sm text-slate-400 text-center mt-2 max-w-[200px]">
        Create a new item for this category
      </p>
    </button>
  );
}

export default AddNewCard;
