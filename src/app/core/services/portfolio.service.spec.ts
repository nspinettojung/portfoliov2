import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose the profile', () => {
    expect(service.profile().name).toBeTruthy();
  });

  it('should return featured projects', () => {
    expect(service.featuredProjects().length).toBeGreaterThan(0);
  });

  it('should find a project by slug', () => {
    const project = service.projects()[0];
    expect(service.projectBySlug(project.slug)).toEqual(project);
  });

  it('should return undefined for an unknown slug', () => {
    expect(service.projectBySlug('does-not-exist')).toBeUndefined();
  });

  it('should group skills by category', () => {
    const groups = service.skillGroups();
    expect(groups.length).toBeGreaterThan(0);
    expect(groups.every((group) => group.skills.length > 0)).toBe(true);
  });

  it('should separate work experience from education', () => {
    expect(service.workExperience().every((item) => item.type === 'work')).toBe(true);
    expect(service.education().every((item) => item.type === 'education')).toBe(true);
  });
});
