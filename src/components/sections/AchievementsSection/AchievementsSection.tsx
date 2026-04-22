/**
 * AchievementsSection — full-width green banner showing key company stats.
 * Uses IntersectionObserver to trigger a CSS count-up animation when the
 * section scrolls into the viewport. No external animation library needed.
 */

import { useRef, useEffect, useState } from 'react';
import { getAchievements } from '@/services/achievementsService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './AchievementsSection.module.css';

export function AchievementsSection() {
  const achievements = getAchievements();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // Trigger animation once when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`section ${styles.section}`} id="achievements" aria-label="Our achievements">
      <div className="container">
        {/* inverted=true renders white text on the green background */}
        <SectionHeading
          eyebrow="By the numbers"
          title="Our Achievements"
          subtitle="Two decades of building homes, trust, and communities across South India."
          inverted
        />

        <div className={styles.grid}>
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`${styles.statItem} ${visible ? styles.visible : ''}`}
            >
              <div className={styles.value}>
                {ach.prefix ?? ''}{ach.value}
                <span className={styles.suffix}>{ach.suffix}</span>
              </div>
              <p className={styles.label}>{ach.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}