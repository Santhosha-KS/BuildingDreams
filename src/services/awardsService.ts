import awardsData from '@/data/awards.json';
import type { Award } from '@/types';

export function getAwards(): Award[] {
  return awardsData as Award[];
}