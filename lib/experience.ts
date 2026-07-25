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
      'Built Hamara-Rozgar — a 5-agent AI system for Pakistan\'s informal economy. Team of 5.',
  },
  {
    period: 'Jan 2025',
    role: 'National AI Hackathon',
    organization: 'atomcamp @ FAST-NUCES Islamabad',
    description:
      'Solo competitor. Two days, agentic AI.',
  },
  {
    period: 'Winter 2025',
    role: 'FAST Problem Solving Competition (FPSC)',
    organization: 'ACM NUCES',
    description:
      'Solo competitor. FAST\'s inter-semester programming contest.',
  },
  {
    period: 'Sep 2024 – Dec 2024',
    role: 'Volunteer Literacy Tutor',
    organization: 'Karwaan-e-Mudabbir',
    description:
      'Tutored basic literacy and math to underprivileged students. 16 hours.'
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
