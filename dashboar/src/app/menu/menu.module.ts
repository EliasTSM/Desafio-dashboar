import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { ListaMenuComponent } from './lista-menu/lista-menu.component';


@NgModule({
  declarations: [
    ListaMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    CabecalhoModule
  ]
})
export class MenuModule { }
