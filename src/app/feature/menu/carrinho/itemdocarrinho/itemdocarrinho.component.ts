import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-itemdocarrinho',
  templateUrl: './itemdocarrinho.component.html',
  styleUrls: ['./itemdocarrinho.component.css']
})
export class ItemdocarrinhoComponent implements OnInit, OnChanges {
  @Input()
  itemPedido: ItemPedido;

  @Output()
  eventoIncremento;

  @Output()
  eventoDecremento;

  @Output()
  eventoAdicionarAoCarrinho = new EventEmitter();


  constructor() {
    this.itemPedido = {} as ItemPedido
    this.eventoIncremento = new EventEmitter()
    this.eventoDecremento = new EventEmitter()
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.itemPedido = changes['itemPedido'].currentValue;
  }

  public subTotal() : number{
    return this.itemPedido.quantidade * this.itemPedido.produto.preco
  }

}
