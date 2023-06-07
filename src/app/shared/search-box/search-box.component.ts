import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription/*  = new Subscription(); */


  @Input()
  public initialValue: string = ''
  @Output()
  public valorEnviado : EventEmitter<string>=  new EventEmitter<string>();

  @Input()
  placeholder : string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
          .pipe(
            debounceTime(300)
          )
          .subscribe(value => {
            this.valorEnviado.emit(value)
          })
  }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

/*   buscar(valor : string){

    this.valorEnviado.emit(valor);
  } */

  buscar(valor : string){
    this.debouncer.next(valor);
  }

}
