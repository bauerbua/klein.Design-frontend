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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactDetailsComponent } from './application-steps/contact-details/contact-details.component';
import { CompanyDetailsComponent } from './application-steps/company-details/company-details.component';
import { StandComponent } from './application-steps/stand/stand.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ApplicationSummaryComponent } from './application-steps/application-summary/application-summary.component';
import { PhotoUploadComponent } from './application-steps/photo-upload/photo-upload.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationResultComponent,
    ContactDetailsComponent,
    CompanyDetailsComponent,
    StandComponent,
    ApplicationSummaryComponent,
    PhotoUploadComponent
  ],
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
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  providers: []
})
export class ApplicationModule { }
