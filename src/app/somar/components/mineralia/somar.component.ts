import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../services';

@Component({
  selector: 'app-mineralia',
  templateUrl: './mineralia.component.html',
  styleUrls: ['./mineralia.component.css']
})
export class SomarComponent implements OnInit {

  constructor(private somar: SomarService) { }
  private valor: number;


  ngOnInit() {
    this.valor = 0;
  }

  calcula(valorRecebido: number){
    this.valor = this.somar.somar(this.valor,valorRecebido);
  }

  get pegaValor(){
    return this.valor;
  }

}
