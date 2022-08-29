import { BarraMenuModule } from './../barra-menu/barra-menu.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';



@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BarraMenuModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class CabecalhoModule { }
