import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { entryRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImprintComponent } from '@views/imprint/imprint.component';

@NgModule({
    declarations: [
      AppComponent,
      ImprintComponent,
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(entryRoutes, {
        initialNavigation: 'enabled'
      }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
