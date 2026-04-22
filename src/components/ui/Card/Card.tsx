import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  padded?: boolean;    // Adds internal padding
  className?: string;
}

export function Card({ children, padded = false, className = '' }: CardProps) {
  return (
    <div
      className={[
        styles.card,
        padded ? styles.padded : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}