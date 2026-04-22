// Application route constants — used by Router, Navbar, and links across the app.
// Always reference ROUTES.X instead of hardcoding strings.

export const ROUTES = {
  HOME:             '/',
  OUR_HOMES:        '/our-homes',
  PACKAGES:         '/packages',
  HOW_IT_WORKS:     '/how-it-works',
  GET_CONSULTATION: '/get-consultation',
} as const;

// Type-safe route value type
export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];