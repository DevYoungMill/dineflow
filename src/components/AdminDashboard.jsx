export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-10">
      <h2 className="text-2xl font-bold mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-slate-400 text-sm">Total Orders</p>
          <h3 className="text-3xl font-bold mt-2">346</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-slate-400 text-sm">Revenue</p>
          <h3 className="text-3xl font-bold mt-2">$951.52</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-slate-400 text-sm">Active Locations</p>
          <h3 className="text-3xl font-bold mt-2">12</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-slate-400 text-sm">On-Time Delivery</p>
          <h3 className="text-3xl font-bold mt-2">98%</h3>
        </div>
      </div>
    </div>
  );
}
