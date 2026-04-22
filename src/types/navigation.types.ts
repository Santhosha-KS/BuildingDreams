// Navigation types — maps to src/data/navigation.json

export interface NavItem {
  id: string;
  label: string;
  route: string; // Matches ROUTES constants, e.g. "/our-homes"
  isExternal?: boolean; // For future external links
}