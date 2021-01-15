import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './application.routing';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    StepsModule,
    ToastModule,
    RouterModule.forChild(applicationRoutes),
    ReactiveFormsModule,
  ],
  providers: [MessageService]
})
export class ApplicationModule { }
