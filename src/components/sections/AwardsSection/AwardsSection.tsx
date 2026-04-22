import { getAwards } from '@/services/awardsService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './AwardsSection.module.css';

// Award emoji icons mapped by index (no external icon library needed)
const AWARD_ICONS = ['🏆', '🌿', '⭐', '🎨', '🚀'];

export function AwardsSection() {
  const awards = getAwards();

  return (
    <section className={`section ${styles.section}`} id="awards" aria-label="Awards">
      <div className="container">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & Accolades"
          subtitle="Our commitment to excellence has been recognised by leading industry bodies."
        />

        <div className={styles.grid}>
          {awards.map((award, index) => (
            <article key={award.id} className={styles.card}>
              <div className={styles.iconCircle} aria-hidden="true">
                {AWARD_ICONS[index % AWARD_ICONS.length]}
              </div>
              <span className={styles.year}>{award.year}</span>
              <h3 className={styles.title}>{award.title}</h3>
              <p className={styles.issuedBy}>{award.issuedBy}</p>
              <p className={styles.description}>{award.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}