import { Paises } from "./restcountries-response.interface";

export interface CacheStore{
  porPais : {termino : string, paises : Paises[]},
  porCapital : {termino : string, capitales : Paises[]}
}
