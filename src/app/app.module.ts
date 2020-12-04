import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { baseRoutes } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(baseRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
