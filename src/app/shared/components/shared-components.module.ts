import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../layouts/base-layout/base-layout.component';
import { ExhibitorCardComponent } from './exhibitor-card/exhibitor-card.component';
import { CircleBannerComponent } from './circle-banner/circle-banner.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

const components = [
  BaseLayoutComponent,
  ExhibitorCardComponent,
  NewsletterFormComponent,
  CircleBannerComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
  ]
})
export class SharedComponentsModule { }
