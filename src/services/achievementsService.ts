import achievementsData from '@/data/achievements.json';
import type { Achievement } from '@/types';

export function getAchievements(): Achievement[] {
  return achievementsData as Achievement[];
}