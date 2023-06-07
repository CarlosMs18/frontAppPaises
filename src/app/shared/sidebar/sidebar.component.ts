import { Component, OnInit } from '@angular/core';
import { sidebarMenu } from 'src/app/interface/sidebar.interface';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sideBarMenu : sidebarMenu[] = [];
  constructor(
    private sideBarservice : SidebarService
  ) { }

  ngOnInit() {
    this.sideBarMenu = this.sideBarservice.sideBarMenu;
    console.log(this.sideBarMenu)

  }

}
