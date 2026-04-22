/**
 * SectionHeading — displays an optional eyebrow label, main title,
 * optional subtitle, and a decorative accent bar.
 * Used at the top of every section/page to provide visual consistency.
 */

import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;     // Small uppercase label above the title
  align?: 'center' | 'left';
  showBar?: boolean;    // Show the decorative color bar (default: true)
  inverted?: boolean;   // White text — for use on dark/coloured backgrounds
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  showBar = true,
  inverted = false,
}: SectionHeadingProps) {
  const classes = [
    styles.wrapper,
    align === 'left' ? styles.left : '',
    inverted ? styles.inverted : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {showBar && <div className={styles.bar} aria-hidden="true" />}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}