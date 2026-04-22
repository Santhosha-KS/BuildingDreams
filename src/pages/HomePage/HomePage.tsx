/**
 * HomePage — entry page.
 * Composes all home page sections in order:
 *   1. HeroBanner         — big brand banner (~55vh)
 *   2. AwardsSection      — industry recognitions
 *   3. AchievementsSection — key stats (green banner)
 *   4. ProjectStatsSection — completed / ongoing / pipeline counts
 *   5. GallerySection     — horizontal photo carousel
 *   6. AboutUsSection     — company story + team
 */

import { useEffect } from 'react';
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner';
import { AwardsSection } from '@/components/sections/AwardsSection/AwardsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection/AchievementsSection';
import { ProjectStatsSection } from '@/components/sections/ProjectStatsSection/ProjectStatsSection';
import { GallerySection } from '@/components/sections/GallerySection/GallerySection';
import { AboutUsSection } from '@/components/sections/AboutUsSection/AboutUsSection';

export function HomePage() {
  // Update browser tab title
  useEffect(() => {
    document.title = 'Santhosha Homes — Building Dreams, Crafting Legacies';
  }, []);

  return (
    <>
      <HeroBanner />
      <AwardsSection />
      <AchievementsSection />
      <ProjectStatsSection />
      <GallerySection />
      <AboutUsSection />
    </>
  );
}