/**
 * GallerySection — horizontal scroll carousel of project photos.
 * Left/right arrow buttons scroll the track by ~320px per click.
 * Scroll snapping gives a smooth experience on touch devices.
 */

import { useRef } from 'react';
import { getGalleryImages } from '@/services/galleryService';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './GallerySection.module.css';

const SCROLL_AMOUNT = 340; // px per arrow click

export function GallerySection() {
  const images = getGalleryImages();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <section className={`section ${styles.section}`} id="gallery" aria-label="Project gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Project Gallery"
          subtitle="A showcase of completed and upcoming homes crafted with care."
        />
      </div>

      {/* Carousel is full-width — container only wraps the heading */}
      <div className="container">
        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={scrollLeft}
            aria-label="Scroll gallery left"
          >
            &#8592;
          </button>

          <div className={styles.track} ref={trackRef} role="list">
            {images.map((image) => (
              <div key={image.id} className={styles.item} role="listitem">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  width={320}
                  height={220}
                />
                <div className={styles.caption}>
                  {image.caption && (
                    <p className={styles.captionText}>{image.caption}</p>
                  )}
                  {image.projectName && (
                    <p className={styles.captionProject}>{image.projectName}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={scrollRight}
            aria-label="Scroll gallery right"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}