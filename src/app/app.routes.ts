import { Routes } from '@angular/router';
import { Shell } from './shared/layout/shell/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'projects',
        title: 'Proyectos',
        loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'projects/:slug',
        title: 'Proyecto',
        loadComponent: () =>
          import('./features/projects/project-detail/project-detail').then((m) => m.ProjectDetail),
      },
      {
        path: 'stack',
        title: 'Stack',
        loadComponent: () => import('./features/stack/stack').then((m) => m.Stack),
      },
      {
        path: 'about',
        title: 'Sobre mí',
        loadComponent: () => import('./features/about/about').then((m) => m.About),
      },
      {
        path: 'contact',
        title: 'Contacto',
        loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
