import { Informacao, InformacoesAPI } from './modelo/informacoes';
import { Veiculo, VeiculosAPI } from './modelo/veiculos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient:HttpClient) { }

  getVeiculos(){
    return this.httpClient.get<VeiculosAPI>('http://localhost:3000/vehicle').pipe(
      pluck('vehicles'),
      map((veiculos)=>
        veiculos.sort((veiculoA, veiculoB)=> this.ordenaVeiculo(veiculoA, veiculoB))
      )
    );
  }

  getInformacoes(valor?:string){
    const params = valor ? new HttpParams().append('valor', valor): undefined
    return this.httpClient.get<InformacoesAPI>('http://localhost:3000/vehicleData',{ params }).pipe(
      pluck('vehicleData'),
      map((informacoes)=>
        informacoes.sort((informacaoA, informacaoB)=> this.ordenaInformacao(informacaoA, informacaoB))
      )
    );
  }

  private ordenaVeiculo(veiculoA: Veiculo, veiculoB: Veiculo){
    if(veiculoA.id > veiculoB.id){
      return 1
    }
    if(veiculoA.id < veiculoB.id){
      return -1
    }
    return 0
  }

  private ordenaInformacao(informacaoA: Informacao, informacaoB: Informacao){
    if(informacaoA.id > informacaoB.id){
      return 1
    }
    if(informacaoA.id < informacaoB.id){
      return -1
    }
    return 0
  }

}
