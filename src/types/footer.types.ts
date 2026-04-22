// Footer types — maps to src/data/footer.json

export interface FooterLink {
  label: string;
  route: string;
  isExternal?: boolean;
}

export interface FooterSection {
  heading: string;
  links: FooterLink[];
}

export interface FooterData {
  sections: FooterSection[];
  copyrightYear: number;
  developerCredit: string; // e.g. "Developed by Santhosha KS"
  companyTagline: string;
}