/**
 * Button — reusable button/link component.
 * Renders as <button> by default; pass `href` to render as <a>.
 * All styling comes from Button.module.css + CSS variables.
 */

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;          // Internal route — renders <Link>
  externalHref?: string;  // External URL — renders <a target="_blank">
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  title?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  externalHref,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  title,
}: ButtonProps) {
  // Build the class list from CSS modules
  const classList = [
    styles.button,
    styles[variant],
    size !== 'md' ? styles[size] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render as React Router Link for internal routes
  if (href) {
    return (
      <Link to={href} className={classList} title={title} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Render as <a> for external URLs
  if (externalHref) {
    return (
      <a
        href={externalHref}
        className={classList}
        target="_blank" //always open in a new tab
        rel="noopener noreferrer"
        title={title}
      >
        {children}
      </a>
    );
  }

  // Default: <button>
  return (
    <button
      type={type}
      className={classList}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
}