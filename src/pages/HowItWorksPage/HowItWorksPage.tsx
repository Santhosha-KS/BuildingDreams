import { useEffect } from 'react';
import { getSteps } from '@/services/howItWorksService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Button } from '@/components/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import styles from './HowItWorksPage.module.css';

export function HowItWorksPage() {
  const steps = getSteps();

  useEffect(() => {
    document.title = 'How It Works — Santhosha Homes';
  }, []);

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Build Your Dream Home"
          subtitle="A transparent, step-by-step journey from your first conversation to handing you the keys."
        />

        <div className={styles.timeline} role="list">
          {steps.map((step) => (
            <div key={step.id} className={styles.step} role="listitem">
              {/* Step number circle */}
              <div
                className={styles.circle}
                aria-label={`Step ${step.stepNumber}`}
              >
                {step.stepNumber}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.stepHeader}>
                  <h2 className={styles.stepTitle}>{step.title}</h2>
                  {step.duration && (
                    <span className={styles.duration}>⏱ {step.duration}</span>
                  )}
                </div>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at the bottom */}
        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Button href={ROUTES.GET_CONSULTATION} size="lg">
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
}