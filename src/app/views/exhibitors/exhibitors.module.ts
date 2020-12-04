import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitorsComponent } from './exhibitors.component';
import { RouterModule } from '@angular/router';
import { exhibitorsRoutes } from './exhibitors-routing';

@NgModule({
  declarations: [ExhibitorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(exhibitorsRoutes),
  ]
})
export class ExhibitorsModule { }
