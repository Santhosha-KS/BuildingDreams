import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ── Global styles — ORDER MATTERS ──────────────────────────
// 1. Design tokens (variables) must load first — all other CSS depends on them
import '@/styles/variables.css';
// 2. Theme overrides (dark mode) must come before global to allow override
import '@/styles/themes.css';
// 3. Base reset and typography
import '@/styles/global.css';
// 4. Utility helper classes
import '@/styles/utilities.css';
// 5. Shared animation keyframes
import '@/styles/animations.css';
// ───────────────────────────────────────────────────────────

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);