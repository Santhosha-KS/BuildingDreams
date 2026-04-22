// Home models types — maps to src/data/homes.json

export interface HomeSpec {
  label: string; // e.g. "Bedrooms"
  value: string; // e.g. "3 BHK"
}

export type HomeStatus = 'available' | 'sold-out' | 'coming-soon';

export interface HomeModel {
  id: string;
  name: string; // e.g. "The Verdant Villa"
  imagePath: string;
  description: string;
  specs: HomeSpec[];
  priceFrom: number; // In INR, e.g. 4500000
  priceTo?: number;
  status: HomeStatus;
  tag?: string; // e.g. "Most Popular" — shown as a badge
}