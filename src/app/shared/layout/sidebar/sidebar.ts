import { Component, computed, input, output } from '@angular/core';
import { Icon } from '../../ui/icon/icon';
import { NavLink } from '../../ui/nav-link/nav-link';

interface NavItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'ptf-sidebar',
  imports: [Icon, NavLink],
  templateUrl: './sidebar.html',
  host: { class: 'contents' },
})
export class Sidebar {
  open = input<boolean>(false);
  close = output<void>();

  brand = input<string>('Portfolio');
  role = input<string>('Backend Developer');
  availability = input<string>('Disponible para trabajar');

  protected readonly navItems: NavItem[] = [
    { label: 'Inicio', icon: 'home', link: '/' },
    { label: 'Proyectos', icon: 'folder_special', link: '/projects' },
    { label: 'Stack', icon: 'code', link: '/stack' },
    { label: 'Sobre mí', icon: 'person', link: '/about' },
    { label: 'Contacto', icon: 'mail', link: '/contact' },
  ];

  protected readonly asideClasses = computed(() =>
    [
      'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-outline-variant/20 bg-surface-container-low transition-transform duration-300 md:static md:translate-x-0',
      this.open() ? 'translate-x-0' : '-translate-x-full',
    ].join(' '),
  );
}
