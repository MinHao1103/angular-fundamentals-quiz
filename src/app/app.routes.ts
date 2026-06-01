import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'practice',
    loadComponent: () => import('./pages/practice/practice').then((m) => m.PracticeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
