// Hero banner types — maps to src/data/hero.json

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaRoute: string; // e.g. "/get-consultation"
  backgroundImagePath: string;
  overlayOpacity: number; // 0.0 – 1.0, e.g. 0.55
}