import { Routes } from '@angular/router';
import { philosophyGuard } from './guard/philosophy.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'philosophy/:name',
    title: 'Philosophy Details',
    canActivate: [philosophyGuard],
    loadComponent: () =>
      import('./pages/philosophy/philosophy.component').then(
        (m) => m.PhilosophyComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
