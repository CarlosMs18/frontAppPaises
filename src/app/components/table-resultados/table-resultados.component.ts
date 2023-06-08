import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Paises } from 'src/app/interface/restcountries-response.interface';


@Component({
  selector: 'app-table-resultados',
  templateUrl: './table-resultados.component.html',
  styleUrls: ['./table-resultados.component.css']
})
export class TableResultadosComponent  {

  @Input()
  paises : Paises[] = [];


}
