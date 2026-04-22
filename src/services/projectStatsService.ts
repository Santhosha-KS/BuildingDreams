import projectStatsData from '@/data/projectStats.json';
import type { ProjectStat } from '@/types';

export function getProjectStats(): ProjectStat[] {
  return projectStatsData as ProjectStat[];
}