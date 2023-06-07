import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableResultadosComponent } from './table-resultados/table-resultados.component';



@NgModule({
  declarations: [
    TableResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TableResultadosComponent
  ]
})
export class ComponentsModule { }
