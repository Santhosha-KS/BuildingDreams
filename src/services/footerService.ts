import footerData from '@/data/footer.json';
import type { FooterData } from '@/types';

export function getFooterData(): FooterData {
  return footerData as FooterData;
}