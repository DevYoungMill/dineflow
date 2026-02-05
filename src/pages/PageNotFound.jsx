import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-6">
      <div className="max-w-xl w-full text-center">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[96px]">
              restaurant
            </span>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-6xl font-heading font-bold text-secondary dark:text-white mb-4">
          404
        </h1>

        <h2 className="text-2xl font-heading font-semibold text-secondary dark:text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-secondary/60 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all"
          >
            Go Home
          </Link>

          <Link
            to="/menu"
            className="px-6 py-3 rounded-lg border border-gray-200 dark:border-white/20 font-bold text-secondary dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
