import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'home',
      loadChildren: () =>
        import('../app/core/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: '404',
      loadChildren: () =>
        import('../app/modules/error-404/error-404.module').then(
          (m) => m.Error404Module
        ),
    },
  
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
  ];
