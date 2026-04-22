import styles from './Badge.module.css';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'pending' | 'error';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export function Badge({ label, variant = 'primary' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </span>
  );
}