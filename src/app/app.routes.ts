import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=>import('./pages/pages.component').then((c)=>c.PagesComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/home/home.component').then(
                (c) => c.HomeComponent
              ),
          },
          {
            path: '**',
            redirectTo: '',
          },
        ],
    }
];
