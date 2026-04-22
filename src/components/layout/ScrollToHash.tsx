/**
 * ScrollToHash — scrolls to an anchor element after navigation.
 *
 * React Router handles client-side routing but does NOT scroll to `#hash`
 * fragments automatically. This component listens to location changes and
 * smoothly scrolls to the target element when a hash is present.
 *
 * Usage: place <ScrollToHash /> once inside <BrowserRouter> in App.tsx.
 *
 * Example: <Link to="/#about"> will navigate to / then scroll to id="about".
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Short delay lets the page render before we try to find the element
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(timer);
    } else {
      // No hash — scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null; // Renders nothing — purely behavioural
}