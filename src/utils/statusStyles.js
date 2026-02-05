export const STATUS_STYLES = {
  new: {
    dot: 'bg-blue-500',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    border: 'border-blue-300',
    timeText: 'text-blue-600',
    timeBg: 'bg-blue-50',
    actionBg: 'bg-blue-50',
    actionText: 'text-blue-600',
    actionHover: 'hover:bg-blue-100',
    actionLabel: 'Start Prep',
  },

  preparing: {
    dot: 'bg-red-500',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-700',
    border: 'border-red-300',
    timeText: 'text-red-600',
    timeBg: 'bg-red-50',
    actionBg: 'bg-red-50',
    actionText: 'text-red-600',
    actionHover: 'hover:bg-red-100',
    actionLabel: 'Mark Ready',
  },

  ready: {
    dot: 'bg-green-500',
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-700',
    border: 'border-green-300',
    timeText: 'text-green-600',
    timeBg: 'bg-green-50',
    actionBg: 'bg-green-50',
    actionText: 'text-green-600',
    actionHover: 'hover:bg-green-100',
    actionLabel: 'Complete Order',
  },

  completed: {
    dot: 'bg-slate-500',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-700',
    border: 'border-slate-300',
    timeBg: 'bg-slate-50',
    actionBg: 'bg-slate-50',
    actionText: 'text-slate-600',
    actionHover: 'hover:bg-slate-100',
    actionLabel: 'Make Delivery',
  },
};

// src/utils/StatusStyle.js

export const CUSTOMER_STATUS = {
  pending: {
    badge:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800/50',
  },

  preparing: {
    badge:
      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/50',
  },

  ready: {
    badge:
      'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/50',
  },

  completed: {
    badge:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50',
  },

  delivered: {
    badge:
      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  },

  cancelled: {
    badge:
      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50',
  },
};

export const getStatusBadgeClass = (status) => {
  return (
    CUSTOMER_STATUS[status]?.badge ||
    'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
  );
};
