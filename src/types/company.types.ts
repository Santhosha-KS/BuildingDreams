// Company information types — maps to src/data/company.json

export interface SocialLink {
  platform: string; // e.g. "facebook" | "instagram" | "linkedin"
  url: string;
  label: string; // Accessible label, e.g. "Follow us on Instagram"
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  logoText: string; // Short logo text when no image available
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}