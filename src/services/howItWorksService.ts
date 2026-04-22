import howItWorksData from '@/data/howItWorks.json';
import type { Step } from '@/types';

export function getSteps(): Step[] {
  return howItWorksData as Step[];
}