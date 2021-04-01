import { Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { ApplicationResultComponent } from './application-result/application-result.component';

export const applicationRoutes: Routes = [
  {path: '', component: ApplicationComponent },
  {path: 'geschafft', component: ApplicationResultComponent}
];
