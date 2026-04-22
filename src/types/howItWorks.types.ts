// How It Works process step types — maps to src/data/howItWorks.json

export interface Step {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  duration?: string; // e.g. "2–4 weeks"
}