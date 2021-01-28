import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { entryRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      SharedModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(entryRoutes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
