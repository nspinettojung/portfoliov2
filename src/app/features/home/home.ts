import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import type { Project } from '../../core/models/project.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Badge } from '../../shared/ui/badge/badge';
import { Icon } from '../../shared/ui/icon/icon';
import { ProjectCard } from '../projects/project-card/project-card';

@Component({
  selector: 'ptf-home',
  imports: [RouterLink, Badge, Icon, ProjectCard],
  templateUrl: './home.html',
})
export class Home {
  private readonly portfolio = inject(PortfolioService);
  private readonly router = inject(Router);

  protected readonly profile = this.portfolio.profile;
  protected readonly featuredProjects = this.portfolio.featuredProjects;

  protected openProject(project: Project): void {
    this.router.navigate(['/projects', project.slug]);
  }
}
