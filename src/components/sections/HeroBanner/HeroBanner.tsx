import { getHeroData } from '@/services/heroService';
import { Button } from '@/components/ui/Button/Button';
import styles from './HeroBanner.module.css';

export function HeroBanner() {
  const hero = getHeroData();

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${hero.backgroundImagePath})`,
      }}
      aria-label="Hero banner"
    >
      {/* Overlay — opacity driven by data */}
      <div
        className={styles.overlay}
        style={{ opacity: hero.overlayOpacity }}
        aria-hidden="true"
      />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Welcome to Santhosha Homes</span>

        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>

        <div className={styles.ctaGroup}>
          <Button href={hero.ctaRoute} size="lg">
            {hero.ctaText}
          </Button>
          <Button href="/our-homes" variant="secondary" size="lg">
            View Our Homes
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollArrow} />
      </div>
    </section>
  );
}