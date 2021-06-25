import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(homeRoutes),
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule
    ]
})
export class HomeModule { }
