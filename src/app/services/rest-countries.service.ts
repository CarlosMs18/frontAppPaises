import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paises } from '../interface/restcountries-response.interface';
import { catchError, of,tap } from 'rxjs';
import { CacheStore } from '../interface/cache-store.interface';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  private base_rest_countries = "https://restcountries.com/v3.1";

  public cacheStore : CacheStore = {
    porPais : {termino : '', paises : []},
    porCapital : {termino : '', capitales: []}
  }

  constructor(
    private http : HttpClient
  ) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem("cachestore",JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cachestore')) return;
     this.cacheStore = JSON.parse( localStorage.getItem('cachestore')! );

  }


  getCountries(termino : string){
    const apiUrl = `${this.base_rest_countries}/name/${termino}`;
    return this.http.get<Paises[]>(apiUrl)
        .pipe(
          catchError(() => of([])),
          tap(paises => this.cacheStore.porPais = {termino, paises}),
          tap(()=> this.saveToLocalStorage())
        )
  }

  getCapital(termino : string){
    const apiUrl = `${this.base_rest_countries}/capital/${termino}`
    return this.http.get<Paises[]>(apiUrl)
    .pipe(
      catchError(() => of([])),
      tap(capitales => this.cacheStore.porCapital = {termino, capitales}),
      tap(()=> this.saveToLocalStorage())
    )
  }
}
