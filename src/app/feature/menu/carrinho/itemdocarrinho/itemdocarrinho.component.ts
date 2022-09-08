import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';

@Component({
  selector: 'app-itemdocarrinho',
  templateUrl: './itemdocarrinho.component.html',
  styleUrls: ['./itemdocarrinho.component.css']
})
export class ItemdocarrinhoComponent implements OnInit {
  @Input()
  itemPedido: ItemPedido

  @Output()
  eventoIncremento;

  @Output()
  eventoDecremento;


  constructor() {
    this.itemPedido = {} as ItemPedido
    this.eventoIncremento = new EventEmitter()
    this.eventoDecremento = new EventEmitter()
   }

  ngOnInit(): void {
  }

  public precototal() : number{
    return this.itemPedido.quantidade * this.itemPedido.produto.preco
  }

}
