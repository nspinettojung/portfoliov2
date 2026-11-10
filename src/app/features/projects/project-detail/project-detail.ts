import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { Badge } from '../../../shared/ui/badge/badge';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'ptf-project-detail',
  imports: [RouterLink, Badge, Icon],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly portfolio = inject(PortfolioService);

  protected readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly project = computed(() => this.portfolio.projectBySlug(this.slug()));
}
