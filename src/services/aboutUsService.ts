import aboutUsData from '@/data/aboutUs.json';
import type { AboutUs } from '@/types';

export function getAboutUs(): AboutUs {
  return aboutUsData as AboutUs;
}