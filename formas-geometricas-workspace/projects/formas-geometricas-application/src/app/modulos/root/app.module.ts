import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RetanguloLegalModule } from 'formas-geometricas-legais';
import { DimensoesService } from '../../servicos/dimensoes.service';
import { ElipseModule } from '../elipse/elipse.module';
import { AppComponent } from './componentes/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RetanguloLegalModule,
    ElipseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
