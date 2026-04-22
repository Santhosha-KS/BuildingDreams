// Project statistics types — maps to src/data/projectStats.json

export type ProjectStatusColor = 'green' | 'orange' | 'yellow';

export interface ProjectStat {
  id: string;
  label: string; // e.g. "Completed Projects"
  count: number;
  color: ProjectStatusColor;
  // CSS custom property name for the accent color token, e.g. "--color-success"
  accentCssVar: string;
}