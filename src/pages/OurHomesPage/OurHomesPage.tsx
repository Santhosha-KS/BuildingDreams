import { useEffect } from 'react';
import { getHomes } from '@/services/homesService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import type { HomeModel } from '@/types';
import styles from './OurHomesPage.module.css';

// Format price in INR (e.g. 4500000 → "₹45 L" or "₹1.5 Cr")
function formatPrice(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(0)} L`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Map HomeStatus to Badge variant
function statusBadge(status: HomeModel['status']): {
  label: string;
  variant: 'success' | 'error' | 'pending';
} {
  switch (status) {
    case 'available':    return { label: 'Available',    variant: 'success'  };
    case 'sold-out':     return { label: 'Sold Out',     variant: 'error'    };
    case 'coming-soon':  return { label: 'Coming Soon',  variant: 'pending'  };
  }
}

export function OurHomesPage() {
  const homes = getHomes();

  useEffect(() => {
    document.title = 'Our Homes — Santhosha Homes';
  }, []);

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Find Your Perfect Home"
          subtitle="From compact urban nests to sprawling luxury villas — designed for every lifestyle."
        />

        <div className={styles.grid}>
          {homes.map((home) => {
            const badge = statusBadge(home.status);
            return (
              <article key={home.id} className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrapper}>
                  <img
                    src={home.imagePath}
                    alt={home.name}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.badgeWrapper}>
                    {home.tag
                      ? <Badge label={home.tag} variant="primary" />
                      : <Badge label={badge.label} variant={badge.variant} />
                    }
                  </div>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{home.name}</h2>
                  <p className={styles.cardDesc}>{home.description}</p>

                  {/* Specs */}
                  <ul className={styles.specs}>
                    {home.specs.map((spec) => (
                      <li key={spec.label} className={styles.spec}>
                        <span className={styles.specLabel}>{spec.label}:</span>
                        <span>{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer — price + CTA */}
                <div className={styles.cardFooter}>
                  <div className={styles.price}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.priceValue}>{formatPrice(home.priceFrom)}</span>
                  </div>
                  <Button
                    href={ROUTES.GET_CONSULTATION}
                    size="sm"
                    variant={home.status === 'sold-out' ? 'ghost' : 'primary'}
                    disabled={home.status === 'sold-out'}
                  >
                    {home.status === 'sold-out' ? 'Sold Out' : 'Enquire Now'}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}