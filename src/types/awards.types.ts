// Awards types — maps to src/data/awards.json

export interface Award {
  id: string;
  title: string;
  year: number;
  issuedBy: string; // e.g. "Karnataka Construction Awards"
  description: string;
}