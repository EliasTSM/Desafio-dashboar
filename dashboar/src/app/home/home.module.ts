import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
    CabecalhoModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
