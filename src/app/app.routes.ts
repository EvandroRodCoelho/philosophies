import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'philosophy/:name',
    component: PhilosophyComponent,
  },
  { path: '**', redirectTo: '' },
];
