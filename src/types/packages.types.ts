// Packages / pricing tier types — maps to src/data/packages.json

export interface PackageFeature {
  label: string;
  included: boolean;
  note?: string; // e.g. "Up to 1200 sq ft"
}

export type PackageTier = 'basic' | 'standard' | 'premium';

export interface Package {
  id: string;
  tier: PackageTier;
  name: string; // e.g. "Standard Build"
  description: string;
  pricePerSqft: number; // In INR
  features: PackageFeature[];
  isHighlighted: boolean; // Renders "Recommended" badge when true
  ctaText: string; // e.g. "Get Started"
}