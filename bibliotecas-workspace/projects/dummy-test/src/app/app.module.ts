import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RetanguloLegalModule } from 'projects/formas-geometricas-legais/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RetanguloLegalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
