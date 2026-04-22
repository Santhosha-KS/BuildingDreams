/**
 * Navbar — sticky top navigation bar.
 * - Logo (text-based mark + company name) on the left
 * - Nav links from navigation.json on the right
 * - "Get Consultation" CTA button
 * - Light/dark theme toggle
 * - Hamburger menu for mobile (< 768px)
 */

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { getNavItems } from '@/services/navigationService';
import { getCompanyInfo } from '@/services/companyService';
import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import styles from './Navbar.module.css';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = getNavItems();
  const company = getCompanyInfo();

  // Separate the "Get Consultation" CTA from the regular nav links
  const consultationItem = navItems.find((item) => item.route === ROUTES.GET_CONSULTATION);
  const regularItems = navItems.filter((item) => item.route !== ROUTES.GET_CONSULTATION);

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => setMobileOpen(false);

  // Helper to determine active class for NavLink (used in both desktop and mobile)
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`;

  const getMobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.mobileNavLink} ${isActive ? styles.active : ''}`;

  return (
    <header role="banner">
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.inner}>
          {/* ── Logo ── */}
          <Link to={ROUTES.HOME} className={styles.logo} aria-label={`${company.name} — Home`}>
            <div className={styles.logoMark} aria-hidden="true">
              {company.logoText}
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>{company.name}</span>
              <span className={styles.logoTagline}>{company.tagline}</span>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className={styles.navLinks} role="list">
            {regularItems.map((item) => (
              <li key={item.id}>
                <NavLink to={item.route} className={getLinkClass} end={item.route === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── Right side: CTA + theme toggle + hamburger ── */}
          <div className={styles.navActions}>
            {/* Theme toggle */}
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* CTA button (desktop only — also shown in mobile menu) */}
            {consultationItem && (
              <div className={styles.navCta}>
                <Button href={consultationItem.route} size="sm">
                  {consultationItem.label}
                </Button>
              </div>
            )}

            {/* Hamburger — mobile only */}
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="false"
      >
        <ul className={styles.mobileNavLinks} role="list">
          {regularItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.route}
                className={getMobileLinkClass}
                end={item.route === '/'}
                onClick={handleMobileLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {consultationItem && (
          <div className={styles.mobileCta}>
            <Button href={consultationItem.route} onClick={handleMobileLinkClick}>
              {consultationItem.label}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}