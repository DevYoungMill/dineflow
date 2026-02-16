export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
      </div>
    </div>
  );
}
