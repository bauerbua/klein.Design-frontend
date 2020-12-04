import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './application-routing';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(applicationRoutes),
  ]
})
export class ApplicationModule { }
