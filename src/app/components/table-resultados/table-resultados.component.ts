import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Country } from 'src/app/interface/country';
import { Pais } from 'src/app/interface/pais.interface';

@Component({
  selector: 'app-table-resultados',
  templateUrl: './table-resultados.component.html',
  styleUrls: ['./table-resultados.component.css']
})
export class TableResultadosComponent implements OnInit  {

  @Input()
  paises : Country[] = [];



  constructor() {

    console.log('consinit')
    console.log(this.paises)

  }

  ngOnInit(): void {
    console.log('init')
    console.log(this.paises)

  }


}
