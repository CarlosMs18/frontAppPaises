import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/interface/restcountries-response.interface';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  public placeholder : string = 'Buscar capital ...';
  public paises  : Paises[] = [];
  public valorInicial : string = '';
  constructor(
    private restContriesService : RestCountriesService
  ) { }

  ngOnInit(): void {
    this.paises = this.restContriesService.cacheStore.porCapital.capitales;
    this.valorInicial = this.restContriesService.cacheStore.porCapital.termino;
  }

  buscarCapital(termino : string){
    this.restContriesService.getCapital(termino)
        .subscribe(
          {
            next : paises => this.paises = paises
          }
        )
  }
}
