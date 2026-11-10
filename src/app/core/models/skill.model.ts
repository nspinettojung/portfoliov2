export type SkillCategory = 'backend' | 'frontend' | 'database' | 'devops' | 'tools' | 'other';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  years?: number;
}
