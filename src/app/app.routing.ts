import { Routes } from '@angular/router';
import { BaseRoutes } from './base.routes';
import { BaseLayoutComponent } from '@shared/layouts/base-layout/base-layout.component';
import { ImprintComponent } from '@views/imprint/imprint.component';
import { sectionsMetadata } from '@shared/utilities/sections-metadata';

export const entryRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: BaseRoutes.HOME
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: BaseRoutes.HOME,
        pathMatch: 'full',
        data: sectionsMetadata.home,
        loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: BaseRoutes.EXHIBITORS,
        data: sectionsMetadata.exhibitors,
        loadChildren: () => import('./views/exhibitors/exhibitors.module').then((m) => m.ExhibitorsModule),
      },
      {
        path: BaseRoutes.APPLICATION,
        data: sectionsMetadata.application,
        loadChildren: () => import('./views/application/application.module').then((m) => m.ApplicationModule),
      },
      {
        path: BaseRoutes.IMPRINT,
        data: sectionsMetadata.imprint,
        component: ImprintComponent
      },
      {
        path: BaseRoutes.ERROR,
        data: sectionsMetadata.error,
        loadChildren: () => import('./views/error/error.module').then((m) => m.ErrorModule),
      }
    ],
  },
  {
    path: '**',
    redirectTo: BaseRoutes.ERROR
  }
];
