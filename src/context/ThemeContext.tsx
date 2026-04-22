/**
 * ThemeContext — provides light/dark theme toggle across the entire app.
 *
 * Analogy for .NET developers:
 *   ThemeContext   = IThemeService (interface / contract)
 *   ThemeProvider  = the DI registration (Startup.ConfigureServices)
 *   useTheme()     = constructor injection of IThemeService
 *
 * The active theme class (.theme-light or .theme-dark) is applied to <html>,
 * which causes CSS custom properties in themes.css to take effect globally.
 */

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

// Context created with null default; guarded in useTheme hook below
const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialise from localStorage so preference persists between sessions
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('re-theme') as Theme) ?? 'light'
  );

  // Apply theme class to <html> and persist to localStorage on every change
  useEffect(() => {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem('re-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme — consume the theme context.
 * Throws a clear error if used outside ThemeProvider (analogous to missing DI registration).
 * eslint-disable-next-line is intentional: context files legitimately export both
 * the Provider component and the consumer hook from the same file.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be called inside a <ThemeProvider>');
  }
  return ctx;
}