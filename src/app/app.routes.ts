import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz').then((m) => m.QuizComponent),
  },
  {
    path: 'result',
    loadComponent: () => import('./pages/result/result').then((m) => m.ResultComponent),
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
