function ProfileInfo({ role = 'client' }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* LEFT PANEL — PROFILE CARD */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-sm text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-4">
            <div
              className="size-28 rounded-full bg-cover bg-center border-4 border-background-light dark:border-background-dark mx-auto"
              style={{
                backgroundImage: "url('/profile.png')",
              }}
            ></div>

            {/* Upload Button */}
            <label className="w-8 h-8 absolute bottom-0 right-0 p-1 bg-primary text-white rounded-full hover:bg-primary/90 shadow-md cursor-pointer">
              <span className="material-symbols-outlined text-[18px] block">
                edit
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>

          <h2 className="font-heading text-xl font-bold text-secondary dark:text-white">
            Alex Morgan
          </h2>

          <p className="text-xs text-primary font-semibold uppercase tracking-wide">
            {role} Account
          </p>

          <p className="text-secondary/50 dark:text-gray-400 text-sm mb-4">
            Member since 2021
          </p>

          <div className="flex flex-col gap-3 text-sm text-left mb-4">
            <div className="flex items-center gap-1 text-secondary/70 dark:text-gray-300">
              <span className="material-symbols-outlined text-[18px]">
                mail
              </span>
              <span className="truncate">alex.morgan@example.com</span>
            </div>

            <div className="flex items-center gap-1 text-secondary/70 dark:text-gray-300">
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              <span>+234 8137025435</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — EDIT FORM */}
      <div className="lg:col-span-3 bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-sm">
        <h3 className="text-lg font-bold text-secondary dark:text-white mb-6">
          Account Settings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="text-xs font-bold text-slate-500">Username</label>
            <input
              className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              placeholder="Alex Morgan"
            />
          </div>

          {/* Email (Static) */}
          <div>
            <label className="text-xs font-bold text-slate-500">Email</label>
            <input
              disabled
              className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-100 text-sm cursor-not-allowed"
              value="alex.morgan@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-bold text-slate-500">Phone</label>
            <input
              className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              placeholder="+234 81 3702 5435"
              defaultValue={'+234 81 3702 5435'}
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-xs font-bold text-slate-500">
              Account Role
            </label>
            <input
              disabled
              className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-100 text-sm capitalize font-semibold"
              value={role}
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="mt-10">
          <h4 className="text-sm font-bold text-secondary dark:text-white mb-4">
            Change Password
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="password"
              placeholder="New Password"
              className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-10">
          <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
