/**
 * PageLayout — wraps every page with Navbar + <main> + Footer.
 * Includes a "Skip to main content" link for keyboard/screen-reader users.
 */

import type { ReactNode } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      {/* Skip link — visible only on keyboard focus, lets screen reader users
          jump past the navbar directly to page content */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100%',
          left: 'var(--space-4)',
          zIndex: 'var(--z-modal)',
          padding: 'var(--space-3) var(--space-6)',
          background: 'var(--color-brand-primary)',
          color: '#fff',
          borderRadius: 'var(--border-radius-md)',
          fontWeight: 'var(--font-weight-semibold)',
          textDecoration: 'none',
          transition: 'top var(--transition-fast)',
        }}
        onFocus={(e) => { e.currentTarget.style.top = 'var(--space-4)'; }}
        onBlur={(e) =>  { e.currentTarget.style.top = '-100%'; }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </>
  );
}