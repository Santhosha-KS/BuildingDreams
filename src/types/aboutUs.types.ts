// About Us types — maps to src/data/aboutUs.json

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  photoPath?: string;
}

export interface AboutUs {
  heading: string;
  story: string; // Company history paragraph(s)
  mission: string;
  vision: string;
  teamMembers: TeamMember[];
  foundedYear: number;
}