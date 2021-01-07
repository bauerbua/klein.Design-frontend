import { Routes } from '@angular/router';
import { ExhibitorsComponent } from './exhibitors.component';
import { SingleExhibitorComponent } from './single-exhibitor/single-exhibitor.component';

export const exhibitorsRoutes: Routes = [
  {path: '', component: ExhibitorsComponent },
  {path: ':id', component: SingleExhibitorComponent }
];
