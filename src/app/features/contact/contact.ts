import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Badge } from '../../shared/ui/badge/badge';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  selector: 'ptf-contact',
  imports: [Badge, Icon],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly portfolio = inject(PortfolioService);

  protected readonly profile = this.portfolio.profile;
}
