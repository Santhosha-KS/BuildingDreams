/**
 * Footer — full-width site footer.
 * Shows brand info, social links, navigation columns, contact details,
 * copyright, and developer credit ("Developed by Santhosha KS").
 * All content comes from footer.json and company.json via services.
 */

import { Link } from 'react-router-dom';
import { getFooterData } from '@/services/footerService';
import { getCompanyInfo } from '@/services/companyService';
import styles from './Footer.module.css';

// First letter of each social platform as the link label (e.g. F, I, L, Y)
function socialAbbreviation(platform: string): string {
  return platform.charAt(0).toUpperCase();
}

export function Footer() {
  const footer = getFooterData();
  const company = getCompanyInfo();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* ── Top: brand + nav columns ── */}
        <div className={styles.top}>

          {/* Brand column */}
          <div className={styles.brand}>
            <div className={styles.logoMark} aria-hidden="true">
              {company.logoText}
            </div>
            <p className={styles.companyName}>{company.name}</p>
            <p className={styles.tagline}>{footer.companyTagline}</p>

            {/* Social links */}
            <ul className={styles.socialLinks} role="list">
              {company.socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {socialAbbreviation(social.platform)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          <div className={styles.columns}>
            {footer.sections.map((section) => (
              <div key={section.heading} className={styles.column}>
                <h3 className={styles.columnHeading}>{section.heading}</h3>
                <ul className={styles.linkList} role="list">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal ? (
                        <a
                          href={link.route}
                          className={styles.footerLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.route} className={styles.footerLink}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact info ── */}
        <div className={styles.contactBlock}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon} aria-hidden="true">📍</span>
            <span>
              {company.address.street}, {company.address.city},{' '}
              {company.address.state} – {company.address.pincode}
            </span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon} aria-hidden="true">📞</span>
            <a href={`tel:${company.phone}`} className={styles.footerLink}>
              {company.phone}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon} aria-hidden="true">✉️</span>
            <a href={`mailto:${company.email}`} className={styles.footerLink}>
              {company.email}
            </a>
          </div>
        </div>

        {/* ── Bottom: copyright + developer credit ── */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {footer.copyrightYear} {company.name}. All rights reserved.
          </p>
          <p className={styles.developerCredit}>
            <strong>{footer.developerCredit}</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}