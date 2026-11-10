export type ExperienceType = 'work' | 'education';

export interface Experience {
  type: ExperienceType;
  role: string;
  company: string;
  location?: string;
  /** Formato ISO: YYYY-MM */
  startDate: string;
  /** Formato ISO: YYYY-MM. Si no existe, el puesto es actual. */
  endDate?: string;
  description: string;
  achievements?: string[];
  technologies: string[];
}
