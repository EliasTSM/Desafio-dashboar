import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  mostraMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  abreMenu(){
    this.mostraMenu = !this.mostraMenu;
  }

}
