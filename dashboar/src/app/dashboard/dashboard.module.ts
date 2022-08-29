import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardVeiculosComponent } from './card-veiculos/card-veiculos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardVeiculosComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CabecalhoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent,
  ]
})
export class DashboardModule { }
