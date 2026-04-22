import homesData from '@/data/homes.json';
import type { HomeModel } from '@/types';

export function getHomes(): HomeModel[] {
  return homesData as HomeModel[];
}