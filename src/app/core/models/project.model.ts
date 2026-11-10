export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}
