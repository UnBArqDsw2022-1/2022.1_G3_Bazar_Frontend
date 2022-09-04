import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  @Input()
  visibilidade: boolean;

  @Output() 
  notify = new EventEmitter();

  itens ?: ItemPedido[]

  constructor() {
    this.visibilidade = true
  }

}
