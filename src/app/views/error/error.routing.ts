import { ErrorRoutes } from './error.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

export const ErrorPageRouting = [
  {
    path: '',
    redirectTo: ErrorRoutes.NOT_FOUND
  },
  {
    path: ErrorRoutes.NOT_FOUND,
    component: NotFoundComponent
  },
  {
    path: ErrorRoutes.SERVER_ERROR,
    component: ServerErrorComponent
  },
];
