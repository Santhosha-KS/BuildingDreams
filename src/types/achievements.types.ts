// Achievements / stats types — maps to src/data/achievements.json

export interface Achievement {
  id: string;
  label: string; // e.g. "Happy Clients"
  value: number; // e.g. 450
  suffix: string; // e.g. "+" or " yrs" or ""
  prefix?: string; // e.g. "₹" for monetary values
}