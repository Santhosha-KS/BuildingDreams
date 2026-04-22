/**
 * ConsultationPage — renders a dynamic form from consultation.json.
 * Form fields are data-driven: add/remove/reorder fields by editing the JSON.
 *
 * NOTE: Form submission is DISABLED in Phase 1–4.
 * The submit button is present but inactive. Backend wiring is Phase 6.
 */

import { useEffect } from 'react';
import { getFormFields } from '@/services/consultationService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import type { FormFieldConfig } from '@/types';
import styles from './ConsultationPage.module.css';

// Info panel bullet points
const INFO_POINTS = [
  { icon: '🆓', text: 'Completely free, no-obligation consultation with our experts.' },
  { icon: '⚡', text: 'We respond within 24 hours on all working days.' },
  { icon: '🔒', text: 'Your information is private and never shared with third parties.' },
  { icon: '🏗️', text: 'Discuss your plot size, budget, and vision in detail.' },
];

// Renders a single form field based on its type from the config
function FormField({ field }: { field: FormFieldConfig }) {
  const labelEl = (
    <label htmlFor={field.id} className={styles.label}>
      {field.label}
      {field.required && <span className={styles.required} aria-hidden="true"> *</span>}
    </label>
  );

  if (field.type === 'textarea') {
    return (
      <div className={styles.field}>
        {labelEl}
        <textarea
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          rows={field.rows ?? 4}
          className={styles.textarea}
          aria-required={field.required}
          disabled // Phase 6: enable when backend is ready
        />
      </div>
    );
  }

  if (field.type === 'select') {
    return (
      <div className={styles.field}>
        {labelEl}
        <select
          id={field.id}
          name={field.name}
          required={field.required}
          className={styles.select}
          aria-required={field.required}
          defaultValue=""
          disabled // Phase 6
        >
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={styles.field}>
      {labelEl}
      <input
        id={field.id}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required}
        minLength={field.validation?.minLength}
        maxLength={field.validation?.maxLength}
        pattern={field.validation?.pattern}
        className={styles.input}
        aria-required={field.required}
        disabled // Phase 6
      />
    </div>
  );
}

export function ConsultationPage() {
  const fields = getFormFields();

  useEffect(() => {
    document.title = 'Get Consultation — Santhosha Homes';
  }, []);

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get Your Free Consultation"
          subtitle="Tell us about your dream home and our experts will reach out within 24 hours."
        />

        <div className={styles.layout}>
          {/* ── Info panel ── */}
          <aside className={styles.infoPanel}>
            <h2 className={styles.infoTitle}>Why Consult With Us?</h2>
            <p className={styles.infoText}>
              Building a home is one of the most significant decisions of your life.
              Our free consultation helps you understand costs, timelines, and possibilities
              before you commit to anything.
            </p>
            <ul className={styles.infoPoints}>
              {INFO_POINTS.map((point) => (
                <li key={point.text} className={styles.infoPoint}>
                  <div className={styles.pointIcon} aria-hidden="true">{point.icon}</div>
                  <p className={styles.pointText}>{point.text}</p>
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Form card ── */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Fill in Your Details</h2>

            {/* Phase note */}
            <p className={styles.phase2Note}>
              📋 Form submission will be enabled in <strong>Phase 6</strong>.
              Fields are displayed for reference and UI testing.
            </p>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()} noValidate>
              {/* Dynamically render all fields from consultation.json */}
              {fields.map((field) => (
                <FormField key={field.id} field={field} />
              ))}

              <div className={styles.submitRow}>
                <button
                  type="submit"
                  className={`${styles.input}`}
                  disabled
                  title="Form submission coming in Phase 6"
                  style={{
                    backgroundColor: 'var(--color-brand-primary)',
                    color: '#fff',
                    fontWeight: 'var(--font-weight-semibold)',
                    cursor: 'not-allowed',
                    opacity: 0.5,
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: 'var(--font-size-base)',
                    border: 'none',
                  }}
                >
                  Submit Request (Coming in Phase 6)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}