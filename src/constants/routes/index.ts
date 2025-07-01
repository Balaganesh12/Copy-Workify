const prefix = '/auth';

export const publicRoutes = {
  LOGIN: `${prefix}/login`,
  SIGNUP: `${prefix}/signup`,
  RESET_PASSWORD: `${prefix}/reset-password`,
  FORGOT_PASSWORD: `${prefix}/forgot-password`,
  SIGNUP_SUCCESS: `${prefix}/signup-success`,
  TERMS: `${prefix}/terms`,
  PRIVACY: `${prefix}/privacy`,
};

export const privateRoutes = {
  DASHBOARD: '/dashboard',
  ONBOARDING: '/onboarding',
  // Customer Management
  PLANNING_BOARD: '/planning-board',
  CLIENTS: {
    dashboard: '/clients',
    create: '/clients/create',
    edit: '/clients/edit',
    view: '/clients/view',
  },
  // Workflows
  REQUESTS: '/requests',
  QUOTES: '/quotes',
  WORK_ORDERS: '/work-orders',
  INVOICES: '/invoices',
  // Backoffice
  TEMPLATES: '/templates',
  INVENTORY: '/inventory',
  PRICING_BOOK: '/pricing-book',
  // Additional
  REFERRAL_PROGRAM: '/referral-program',
  SUPPORT: '/support',
  ACCOUNT_SETTINGS: '/account-settings',
};

export const pageRoutes = {
  ...publicRoutes,
  ...privateRoutes,
};
