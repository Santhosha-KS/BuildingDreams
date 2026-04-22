import { useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found — Santhosha Homes';
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.code} aria-hidden="true">404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.subtitle}>
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back on track.
      </p>
      <div className={styles.actions}>
        <Button href={ROUTES.HOME} size="lg">Go to Home</Button>
        <Button href={ROUTES.GET_CONSULTATION} variant="secondary" size="lg">
          Get Consultation
        </Button>
      </div>
    </div>
  );
}