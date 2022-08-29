import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-veiculos',
  templateUrl: './card-veiculos.component.html',
  styleUrls: ['./card-veiculos.component.css']
})
export class CardVeiculosComponent implements OnInit {

  @Input() veiculo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
