import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {



  @Output()
  public valorEnviado : EventEmitter<string>=  new EventEmitter<string>();

  @Input()
  valorInicial : string= '';

  @Input()
  placeholder : string = '';

  constructor() { }

  ngOnInit(): void{

  }

  presionarTecla(termino : string){

    this.valorEnviado.emit(termino);
  }

/*   buscar(valor : string){

    this.valorEnviado.emit(valor);
  } */



}
