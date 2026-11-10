import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'ptf-shell',
  imports: [RouterOutlet, Sidebar, Topbar],
  templateUrl: './shell.html',
  host: { class: 'block min-h-dvh bg-surface text-on-surface' },
})
export class Shell {
  private readonly router = inject(Router);
  private readonly portfolio = inject(PortfolioService);

  protected readonly profile = this.portfolio.profile;
  protected readonly sidebarOpen = signal(false);

  protected readonly title = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.currentRouteTitle()),
    ),
    { initialValue: 'Inicio' },
  );

  protected openSidebar(): void {
    this.sidebarOpen.set(true);
  }

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  private currentRouteTitle(): string {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    return route.snapshot.title ?? 'Inicio';
  }
}
