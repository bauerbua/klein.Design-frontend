import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../layouts/base-layout/base-layout.component';
import { ExhibitorCardComponent } from './exhibitor-card/exhibitor-card.component';
import { CircleBannerComponent } from './circle-banner/circle-banner.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const components = [
  BaseLayoutComponent,
  ExhibitorCardComponent,
  NewsletterFormComponent,
  CircleBannerComponent,
  NavbarComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    components,
    LoaderComponent,
  ],
  exports: [
    components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ]
})
export class SharedComponentsModule { }
