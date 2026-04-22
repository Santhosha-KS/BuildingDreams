import { getAboutUs } from '@/services/aboutUsService';
import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import styles from './AboutUsSection.module.css';

export function AboutUsSection() {
  const about = getAboutUs();

  return (
    <section className={`section ${styles.section}`} id="about" aria-label="About us">
      <div className="container">
        <div className={styles.grid}>

          {/* ── Text column ── */}
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Who We Are</span>
            <h2 className={styles.title}>{about.heading}</h2>
            <p className={styles.story}>{about.story}</p>

            {/* Mission & Vision */}
            <div className={styles.mvGrid}>
              <div className={styles.mvItem}>
                <div className={styles.mvIcon} aria-hidden="true">🎯</div>
                <div>
                  <p className={styles.mvTitle}>Our Mission</p>
                  <p className={styles.mvText}>{about.mission}</p>
                </div>
              </div>
              <div className={styles.mvItem}>
                <div className={styles.mvIcon} aria-hidden="true">🔭</div>
                <div>
                  <p className={styles.mvTitle}>Our Vision</p>
                  <p className={styles.mvText}>{about.vision}</p>
                </div>
              </div>
            </div>

            <Button href={ROUTES.GET_CONSULTATION}>Get Free Consultation</Button>

            {/* Team members */}
            {about.teamMembers.length > 0 && (
              <div className={styles.teamGrid}>
                {about.teamMembers.map((member) => (
                  <div key={member.id} className={styles.teamMember}>
                    <div className={styles.avatar} aria-hidden="true">
                      {member.name.charAt(0)}
                    </div>
                    <div className={styles.memberInfo}>
                      <span className={styles.memberName}>{member.name}</span>
                      <span className={styles.memberTitle}>{member.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Image column ── */}
          <div className={styles.imageCol}>
            <div className={styles.imagePlaceholder} aria-hidden="true">
              <span>🏗️</span>
              <span className={styles.imagePlaceholderLabel}>Our Team & Projects</span>
            </div>

            {/* Founded badge overlaid on image */}
            <div className={styles.foundedBadge}>
              <span className={styles.foundedYear}>{about.foundedYear}</span>
              <span className={styles.foundedLabel}>Est.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}