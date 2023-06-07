import { Injectable } from '@angular/core';
import { sidebarMenu } from '../interface/sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  sideBarMenu: sidebarMenu[] = [
     {
       path : '/api/pais',
       titulo :  'Por Pais'
     },
     {
      path : '/api/capital',
      titulo : 'Por Capital'
     }
  ]
}
