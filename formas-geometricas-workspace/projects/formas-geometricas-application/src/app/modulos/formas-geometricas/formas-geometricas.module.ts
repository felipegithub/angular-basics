import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElipseComponent } from './componentes/elipse/elipse.component';
import { RetanguloComponent } from './componentes/retangulo/retangulo.component';



@NgModule({
  declarations: [
    RetanguloComponent,
    ElipseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RetanguloComponent, ElipseComponent]
})
export class FormasGeometricasModule { }
