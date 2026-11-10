import { Component, inject } from '@angular/core';
import type { SkillCategory } from '../../core/models/skill.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Badge } from '../../shared/ui/badge/badge';
import { Card } from '../../shared/ui/card/card';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  selector: 'ptf-stack',
  imports: [Badge, Card, Icon],
  templateUrl: './stack.html',
})
export class Stack {
  private readonly portfolio = inject(PortfolioService);

  protected readonly skillGroups = this.portfolio.skillGroups;

  protected groupIcon(category: SkillCategory): string {
    const icons: Record<SkillCategory, string> = {
      backend: 'dns',
      frontend: 'web',
      database: 'database',
      devops: 'cloud',
      tools: 'build',
      other: 'extension',
    };

    return icons[category];
  }
}
