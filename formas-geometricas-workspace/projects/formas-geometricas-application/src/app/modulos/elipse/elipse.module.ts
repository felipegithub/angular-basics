import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElipseComponent } from './componente/elipse.component';



@NgModule({
  declarations: [ElipseComponent],
  imports: [
    CommonModule
  ],
  exports: [ElipseComponent]
})
export class ElipseModule { }
