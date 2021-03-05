import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { RouterModule } from '@angular/router';
import { ErrorPageRouting } from './error.routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotFoundComponent, ServerErrorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ErrorPageRouting),
        MatButtonModule,
    ],
})
export class ErrorModule { }
