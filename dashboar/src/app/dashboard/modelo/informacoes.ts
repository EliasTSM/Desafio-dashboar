export interface Informacoes extends Array<Informacao> {}

export interface Informacao{
  id:number;
  vin:string|number;
  odometer:number | string;
  status: string;
  fuelLevel: number | string;
  lat: number | string;
  long: number | string;
}

export interface InformacoesAPI {
  vehicleData: Informacoes;
}
