import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home-routing';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
