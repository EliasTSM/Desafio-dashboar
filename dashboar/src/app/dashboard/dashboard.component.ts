import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { merge } from 'rxjs';

const esperaDigitacao = 300;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent{

  formulariosInput = new FormControl();

  informacaoInicial$ = this.dashboardService.getInformacoes().pipe(tap(()=>{console.log('Fluxo inicial')}));
  filtroPeloInput$ = this.formulariosInput.valueChanges.pipe(
    debounceTime(esperaDigitacao),
    tap(()=>{console.log('Fluxo do filtro')}),
    tap(console.log),
    filter((valorDigitado)=>valorDigitado.length>=15 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado)=>this.dashboardService.getInformacoes(valorDigitado))
  );

  veiculos$ = this.dashboardService.getVeiculos();
  informacoes$ = merge(this.informacaoInicial$, this.filtroPeloInput$);


  valorSelecionado:number = 1;
  valorAlterado:number = 1;

  listaImagens:string[] = ['ranger','mustang','territory','broncoSport'];
  info:any[] = ['2RFAASDY54E4HDU34874', '2FRHDUYS2Y63NHD22455', '2RFAASDY54E4HDU34875', '2FRHDUYS2Y63NHD22654'];

  constructor(private dashboardService:DashboardService) { }

  mudaCarro(e:any){
    this.valorSelecionado = e.target.value;
    this.valorAlterado = this.valorSelecionado;
  }

  altera(a:any){
    this.formulariosInput.reset();
    this.valorSelecionado = (a - 1);
    this.valorAlterado = (a - 1);
    console.log(a);
  }


}
