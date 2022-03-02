import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetanguloComponent } from './componente/retangulo.component';



@NgModule({
  declarations: [RetanguloComponent],
  imports: [
    CommonModule
  ],
  exports: [RetanguloComponent]
})
export class RetanguloModule { }
