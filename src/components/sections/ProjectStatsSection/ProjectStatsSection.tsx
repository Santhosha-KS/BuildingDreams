/**
 * ProjectStatsSection — three cards showing:
 *   Completed (green) | Ongoing (orange) | In Discussion / Pipeline (yellow)
 * Color and accent come from projectStats.json — no hardcoded values.
 */

import { getProjectStats } from '@/services/projectStatsService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './ProjectStatsSection.module.css';

// Icon map for each project status
const STATUS_ICONS: Record<string, string> = {
  green:  '✅',
  orange: '🔨',
  yellow: '💬',
};

export function ProjectStatsSection() {
  const stats = getProjectStats();

  return (
    <section className={`section ${styles.section}`} aria-label="Project statistics">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects at a Glance"
          subtitle="A transparent look at where we stand today."
        />

        <div className={styles.grid}>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={styles.card}
              style={{ borderTopColor: `var(${stat.accentCssVar})` }}
            >
              <div
                className={styles.iconRing}
                style={{
                  borderColor: `var(${stat.accentCssVar})`,
                  color: `var(${stat.accentCssVar})`,
                }}
                aria-hidden="true"
              >
                {STATUS_ICONS[stat.color] ?? '📊'}
              </div>

              <div
                className={styles.count}
                style={{ color: `var(${stat.accentCssVar})` }}
              >
                {stat.count}
              </div>

              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}