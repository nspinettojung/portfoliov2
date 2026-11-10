import { Injectable, computed, signal } from '@angular/core';
import { EXPERIENCES } from '../data/experience.data';
import { PROFILE } from '../data/profile.data';
import { PROJECTS } from '../data/projects.data';
import { SKILL_CATEGORY_LABELS, SKILLS } from '../data/skills.data';
import type { Experience } from '../models/experience.model';
import type { Profile } from '../models/profile.model';
import type { Project } from '../models/project.model';
import type { Skill, SkillCategory } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly _profile = signal<Profile>(PROFILE);
  private readonly _projects = signal<Project[]>(PROJECTS);
  private readonly _skills = signal<Skill[]>(SKILLS);
  private readonly _experience = signal<Experience[]>(EXPERIENCES);

  readonly profile = this._profile.asReadonly();
  readonly projects = this._projects.asReadonly();
  readonly skills = this._skills.asReadonly();
  readonly experience = this._experience.asReadonly();

  readonly featuredProjects = computed(() =>
    this._projects().filter((project) => project.featured),
  );

  readonly workExperience = computed(() =>
    this._experience().filter((item) => item.type === 'work'),
  );

  readonly education = computed(() =>
    this._experience().filter((item) => item.type === 'education'),
  );

  /**
   * Agrupa las skills por categoría manteniendo el orden de los datos.
   */
  readonly skillGroups = computed(() => {
    const groups = new Map<SkillCategory, Skill[]>();

    for (const skill of this._skills()) {
      const list = groups.get(skill.category) ?? [];
      list.push(skill);
      groups.set(skill.category, list);
    }

    return Array.from(groups, ([category, skills]) => ({
      category,
      label: SKILL_CATEGORY_LABELS[category],
      skills,
    }));
  });

  projectBySlug(slug: string): Project | undefined {
    return this._projects().find((project) => project.slug === slug);
  }
}
