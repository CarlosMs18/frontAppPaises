import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Paises } from 'src/app/interface/restcountries-response.interface';
import { RestCountriesService } from 'src/app/services/rest-countries.service';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  public placeholder : string = 'Buscar pais ...';

  public paises  : Paises[] = [];
  public valorInicial : string = '';
  constructor(
    private restContriesService : RestCountriesService
  ) { }

  ngOnInit(): void {
    this.paises  = this.restContriesService.cacheStore.porPais.paises;
    this.valorInicial = this.restContriesService.cacheStore.porPais.termino;
  }


  buscarPais(termino : string){
    this.restContriesService.getCountries(termino)
          .subscribe(
            {
              next : paises => {
                this.paises  = paises;

              }/* ,
              error : error => {
                console.log(error.error.status)
                  if(error.error.status == "404"){
                    console.log('aca')
                    this.paises = [];
                    console.log(this.paises)
                  }
              } */
            }
          )
  }

}
