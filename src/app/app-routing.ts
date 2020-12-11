import { Routes } from '@angular/router';
import { BaseRoutes } from './base.routes';
import { BaseLayoutComponent } from './shared/components/base-layout/base-layout.component';

export const entryRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: BaseRoutes.HOME,
        pathMatch: 'full',
        loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: BaseRoutes.EXHIBITORS,
        loadChildren: () => import('./views/exhibitors/exhibitors.module').then((m) => m.ExhibitorsModule),
      },
      {
        path: BaseRoutes.APPLICATION,
        loadChildren: () => import('./views/application/application.module').then((m) => m.ApplicationModule),
      },
    ],
  }
];
