/**
 * Real experience and education data, sourced from the resume.
 */

export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  description: string;
  link?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    period: '2026',
    role: 'Google Antigravity Community Hackathon — AISeekho',
    organization: 'Team of 5',
    description:
      'Built Hamara-Rozgar, a 5-agent cooperative AI orchestrator for Pakistan\'s informal economy with multilingual parsing, OSM Nominatim geocoding, Supabase ledger, and Groq API.',
  },
  {
    period: 'Jan 2025',
    role: 'National AI Hackathon',
    organization: 'atomcamp @ FAST-NUCES Islamabad',
    description:
      'Participated as a solo competitor in a two-day national AI hackathon focused on agentic AI solutions.',
  },
  {
    period: 'Winter 2025',
    role: 'FAST Problem Solving Competition (FPSC)',
    organization: 'ACM NUCES',
    description:
      'Competed in FAST-NUCES\'s inter-semester competitive programming challenge as a solo participant.',
  },
  {
    period: 'Sep 2024 – Dec 2024',
    role: 'Volunteer Literacy Tutor',
    organization: 'Karwaan-e-Mudabbir',
    description:
      '16-hour community service engagement teaching basic literacy and mathematics to underprivileged students via Karwaan-e-Mudabbir\'s non-formal education program.',
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export const education: EducationEntry = {
  degree: 'B.S. Computer Science',
  institution: 'FAST-NUCES, Islamabad',
  period: '2023 – 2027',
  detail: '6th semester',
};
