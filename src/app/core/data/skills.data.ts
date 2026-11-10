import type { Skill, SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  database: 'Bases de datos',
  devops: 'DevOps & Cloud',
  tools: 'Herramientas',
  other: 'Otras',
};

/**
 * Habilidades técnicas. El orden dentro de cada categoría se respeta en la UI.
 * Los datos actuales son ficticios y sirven como demo.
 */
export const SKILLS: Skill[] = [
  { name: 'TypeScript', category: 'backend', level: 'expert', years: 7 },
  { name: 'Node.js', category: 'backend', level: 'expert', years: 7 },
  { name: 'NestJS', category: 'backend', level: 'advanced', years: 5 },
  { name: 'Java', category: 'backend', level: 'advanced', years: 6 },
  { name: 'Spring Boot', category: 'backend', level: 'advanced', years: 5 },
  { name: 'Go', category: 'backend', level: 'intermediate', years: 3 },
  { name: 'Python', category: 'backend', level: 'intermediate', years: 4 },

  { name: 'Angular', category: 'frontend', level: 'advanced', years: 4 },
  { name: 'React', category: 'frontend', level: 'intermediate', years: 3 },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced', years: 4 },

  { name: 'PostgreSQL', category: 'database', level: 'expert', years: 7 },
  { name: 'Redis', category: 'database', level: 'advanced', years: 5 },
  { name: 'MongoDB', category: 'database', level: 'intermediate', years: 3 },
  { name: 'MySQL', category: 'database', level: 'advanced', years: 5 },

  { name: 'Docker', category: 'devops', level: 'advanced', years: 5 },
  { name: 'Kubernetes', category: 'devops', level: 'intermediate', years: 3 },
  { name: 'AWS', category: 'devops', level: 'intermediate', years: 4 },
  { name: 'GitHub Actions', category: 'devops', level: 'advanced', years: 4 },
  { name: 'Terraform', category: 'devops', level: 'intermediate', years: 3 },

  { name: 'Git', category: 'tools', level: 'expert', years: 8 },
  { name: 'Linux', category: 'tools', level: 'advanced', years: 7 },
  { name: 'Prometheus', category: 'tools', level: 'intermediate', years: 3 },
  { name: 'Grafana', category: 'tools', level: 'intermediate', years: 3 },
  { name: 'OpenAPI', category: 'tools', level: 'advanced', years: 5 },

  { name: 'RabbitMQ', category: 'other', level: 'advanced', years: 4 },
  { name: 'Kafka', category: 'other', level: 'intermediate', years: 3 },
  { name: 'gRPC', category: 'other', level: 'intermediate', years: 3 },
];
