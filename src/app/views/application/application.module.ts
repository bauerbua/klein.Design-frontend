import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './application.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApplicationResultComponent } from './application-result/application-result.component';

@NgModule({
  declarations: [ApplicationComponent, ApplicationResultComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(applicationRoutes),
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatStepperModule,
        MatIconModule,
        MatCheckboxModule,
    ],
  providers: []
})
export class ApplicationModule { }
