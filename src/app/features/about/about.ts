import { Component, inject } from '@angular/core';
import type { Experience } from '../../core/models/experience.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Badge } from '../../shared/ui/badge/badge';
import { Card } from '../../shared/ui/card/card';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  selector: 'ptf-about',
  imports: [Badge, Card, Icon],
  templateUrl: './about.html',
})
export class About {
  private readonly portfolio = inject(PortfolioService);

  protected readonly profile = this.portfolio.profile;
  protected readonly workExperience = this.portfolio.workExperience;
  protected readonly education = this.portfolio.education;

  protected formatPeriod(experience: Experience): string {
    const start = this.formatDate(experience.startDate);
    const end = experience.endDate ? this.formatDate(experience.endDate) : 'Actualidad';
    return `${start} — ${end}`;
  }

  private formatDate(value: string): string {
    const [year, month] = value.split('-').map(Number);
    return new Intl.DateTimeFormat('es', { month: 'short', year: 'numeric' }).format(
      new Date(year, month - 1, 1),
    );
  }
}
