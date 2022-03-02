import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElipseModule } from '../elipse/elipse.module';
import { RetanguloModule } from '../retangulo/retangulo.module';
import { AppComponent } from './componentes/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RetanguloModule,
    ElipseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
