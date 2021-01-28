import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './application.routing';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    StepsModule,
    ToastModule,
    RouterModule.forChild(applicationRoutes),
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule
  ],
  providers: [MessageService]
})
export class ApplicationModule { }
