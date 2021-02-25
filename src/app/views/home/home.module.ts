import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SwiperModule } from 'swiper/angular';
import { NguCarouselModule } from '@ngu/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(homeRoutes),
    MatButtonModule,
    MatIconModule,
    SwiperModule,
    NguCarouselModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
