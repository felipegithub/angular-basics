import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RetanguloComponent } from '../formas-geometricas/componentes/retangulo/retangulo.component';
import { FormasGeometricasModule } from '../formas-geometricas/formas-geometricas.module';
import { AppComponent } from './componentes/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormasGeometricasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
