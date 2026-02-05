import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-secondary/5 dark:bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10 mb-8 flex items-center justify-center gap-3">
        <Link to="/">
          <img src="dineflow.png" alt="DineFlow Logo" width="150" />
        </Link>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 p-8 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-secondary/60 dark:text-gray-400 text-sm">
            Please sign in to your restaurant dashboard.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-secondary dark:text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-background-light dark:bg-black/20 text-secondary dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-secondary dark:text-gray-300">
                Password
              </label>
              <a
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-[20px]">
                  lock
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-background-light dark:bg-black/20 text-secondary dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl shadow-lg shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary transition-all duration-200 hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm mb-4">
              <span className="px-2 bg-white dark:bg-surface-dark text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Google */}
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-white/5 text-sm font-medium transition-colors text-secondary dark:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              Google
            </button>

            {/* Facebook */}
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-[#1877F2] hover:bg-[#1864D9] text-white text-sm font-medium transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          Don't have an account?{' '}
          <Link
            className="font-medium text-primary hover:text-primary/80 transition-colors"
            to="/signup"
          >
            Sign up for a free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
