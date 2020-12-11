import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { ExhibitorCardComponent } from './exhibitor-card/exhibitor-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CircleBannerComponent } from './circle-banner/circle-banner.component';

const components = [
  BaseLayoutComponent,
  ExhibitorCardComponent,
  ContactFormComponent,
  CircleBannerComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedComponentsModule { }
