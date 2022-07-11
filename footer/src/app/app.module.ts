import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBolivarComModule } from 'ngx-bolivar-com';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBolivarComModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
