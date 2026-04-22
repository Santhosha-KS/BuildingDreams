import packagesData from '@/data/packages.json';
import type { Package } from '@/types';

export function getPackages(): Package[] {
  return packagesData as Package[];
}