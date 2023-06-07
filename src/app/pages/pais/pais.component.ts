import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/interface/country';
import { Pais } from 'src/app/interface/pais.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  public placeholder : string = 'Buscar pais ...';
  public paises : Country[] = [];
  public initialValue: string = '';
  public mensajeNoEncontrado = "";

  constructor(
    private countriesService : CountriesService
  ) { }

  ngOnInit(): void {
  }

  buscarPais(termino : string){
    this.countriesService.searchCountry(termino)
          .subscribe(paises => this.paises = paises)
  }

}
