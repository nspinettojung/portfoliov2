import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { Project } from '../../../core/models/project.model';
import { ProjectCard } from './project-card';

const project: Project = {
  slug: 'aether-os',
  title: 'Aether OS',
  description: 'Next-generation operating system interface.',
  imageUrl: 'https://example.com/aether.png',
  badge: 'Web App',
  tags: ['React', 'Three.js', 'Tailwind'],
};

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', project);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the project information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Aether OS');
    expect(compiled.textContent).toContain('React');
  });
});
