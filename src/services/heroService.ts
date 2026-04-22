import heroData from '@/data/hero.json';
import type { HeroData } from '@/types';

export function getHeroData(): HeroData {
  return heroData as HeroData;
}