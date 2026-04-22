// Responsive breakpoints (in pixels) — mirrors common mobile-first breakpoints.
// Use in JS/TS logic (e.g. useWindowSize hook). For CSS use the same values via media queries.

export const BREAKPOINTS = {
  SM:  576,   // Small devices (landscape phones)
  MD:  768,   // Medium devices (tablets) — Navbar collapses at this breakpoint
  LG:  992,   // Large devices (desktops)
  XL:  1200,  // Extra large (wide desktops)
  XXL: 1400,  // Full HD desktops
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;