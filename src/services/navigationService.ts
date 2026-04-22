import navigationData from '@/data/navigation.json';
import type { NavItem } from '@/types';

export function getNavItems(): NavItem[] {
  return navigationData as NavItem[];
}