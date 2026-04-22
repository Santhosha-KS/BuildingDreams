import { useEffect } from 'react';
import { getPackages } from '@/services/packagesService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import styles from './PackagesPage.module.css';

export function PackagesPage() {
  const packages = getPackages();

  useEffect(() => {
    document.title = 'Packages — Santhosha Homes';
  }, []);

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose Your Build Package"
          subtitle="Transparent pricing. No hidden costs. Pick the tier that fits your vision and budget."
        />

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`${styles.card} ${pkg.isHighlighted ? styles.highlighted : ''}`}
            >
              {/* Recommended ribbon */}
              {pkg.isHighlighted && (
                <div className={styles.recommendedBadge} aria-label="Recommended package">
                  ⭐ Recommended
                </div>
              )}

              {/* Header */}
              <div className={styles.cardHeader}>
                <span className={styles.tier}>{pkg.tier}</span>
                <h2 className={styles.name}>{pkg.name}</h2>
                <p className={styles.description}>{pkg.description}</p>
              </div>

              {/* Price */}
              <div className={styles.priceRow}>
                <span className={styles.priceAmount}>
                  ₹{pkg.pricePerSqft.toLocaleString('en-IN')}
                </span>
                <span className={styles.pricePer}>/sq ft</span>
              </div>

              <hr className={styles.divider} />

              {/* Features list */}
              <ul className={styles.features}>
                {pkg.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={`${styles.feature} ${feature.included ? styles.featureIncluded : styles.featureExcluded}`}
                  >
                    {/* SVG tick or cross — no icon library needed */}
                    <span className={styles.featureIcon} aria-hidden="true">
                      {feature.included ? '✓' : '✕'}
                    </span>
                    <div>
                      <span className={styles.featureLabel}>{feature.label}</span>
                      {feature.note && (
                        <p className={styles.featureNote}>{feature.note}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={ROUTES.GET_CONSULTATION}
                variant={pkg.isHighlighted ? 'primary' : 'secondary'}
              >
                {pkg.ctaText}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}