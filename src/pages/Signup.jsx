import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SpinnerMini from '../components/SpinnerMini';
import { signUp } from '../services/apiAuth';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.fullName.trim()) {
      setError('Full name is required.');
      return;
    }
    if (!form.email.trim()) {
      setError('Email is required.');
      return;
    }
    if (!form.phone.trim()) {
      setError('Phone number is required.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      await signUp({
        email: form.email.trim(),
        password: form.password,
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
      });
      navigate('/login');
    } catch (err) {
      setError(err?.message || 'Unable to create account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark py-6 px-6 lg:px-4">
      <div className="w-full max-w-120">
        {/* Logo */}
        <div className="relative z-10 mb-8 flex items-center justify-center gap-3">
          <Link to="/">
            <img src="dineflow.png" alt="DineFlow Logo" width="150" />
          </Link>
        </div>
        {/* Card */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl shadow-black/5 border border-gray-100 dark:border-white/5 p-8 sm:p-10 relative overflow-hidden">
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-80"></div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-secondary dark:text-white mb-2">
              Create your account
            </h1>
            <p className="text-secondary/60 dark:text-gray-400 text-sm">
              Join thousands of restaurants growing with DineFlow.
            </p>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Google */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-white/5 text-sm font-medium transition-colors text-secondary dark:text-white"
            >
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
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-[#1877F2] hover:bg-[#1864D9] text-white text-sm font-medium transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-white dark:bg-surface-dark px-4 text-secondary/40 dark:text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={onChange}
                placeholder="Jane Doe"
                className="block w-full rounded-lg border-0 py-3 px-3 text-secondary shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm dark:bg-black/20 dark:ring-white/10 dark:text-white transition bg-gray-50/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@company.com"
                className="block w-full rounded-lg border-0 py-3 px-3 text-secondary shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm dark:bg-black/20 dark:ring-white/10 dark:text-white transition bg-gray-50/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-1.5">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+234 8137 025 435"
                className="block w-full rounded-lg border-0 py-3 px-3 text-secondary shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm dark:bg-black/20 dark:ring-white/10 dark:text-white transition bg-gray-50/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="••••••••"
                className="block w-full rounded-lg border-0 py-3 px-3 text-secondary shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm dark:bg-black/20 dark:ring-white/10 dark:text-white transition bg-gray-50/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={onChange}
                placeholder="••••••••"
                className="block w-full rounded-lg border-0 py-3 px-3 text-secondary shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm dark:bg-black/20 dark:ring-white/10 dark:text-white transition bg-gray-50/50"
              />
            </div>

            {error ? (
              <div className="text-xs text-red-500 font-medium">{error}</div>
            ) : null}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-white/10 dark:bg-white/5"
              />
              <label className="text-xs text-secondary/60 dark:text-gray-400">
                I agree to the{' '}
                <a
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-lg bg-primary px-3 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {loading ? <SpinnerMini /> : 'Create Account'}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              className="font-medium text-primary hover:text-primary/80 transition-colors"
              to="/login"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
