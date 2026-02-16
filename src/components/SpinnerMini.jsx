export default function SpinnerMini() {
  return (
    <span className="inline-flex items-center justify-center w-4 h-4">
      <span className="absolute w-4 h-4 rounded-full border-2 border-white/40"></span>
      <span className="absolute w-4 h-4 rounded-full border-2 border-transparent border-t-white animate-spin"></span>
    </span>
  );
}
