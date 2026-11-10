import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import type { Project } from '../../core/models/project.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'ptf-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
})
export class Projects {
  private readonly portfolio = inject(PortfolioService);
  private readonly router = inject(Router);

  protected readonly projects = this.portfolio.projects;

  protected openProject(project: Project): void {
    this.router.navigate(['/projects', project.slug]);
  }
}
