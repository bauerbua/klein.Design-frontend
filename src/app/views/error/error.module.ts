import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { RouterModule } from '@angular/router';
import { ErrorPageRouting } from './error.routing';

@NgModule({
  declarations: [NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    RouterModule.forChild(ErrorPageRouting),
  ],
})
export class ErrorModule { }
