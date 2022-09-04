import { Component, Input, OnInit } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { Produto } from 'src/app/models/Produto.model';

@Component({
  selector: 'app-itemdocarrinho',
  templateUrl: './itemdocarrinho.component.html',
  styleUrls: ['./itemdocarrinho.component.css']
})
export class ItemdocarrinhoComponent implements OnInit {
  @Input()
  itemPedido :ItemPedido | any

  constructor() {
    this.itemPedido = {} as ItemPedido
   }

  ngOnInit(): void {
  }

  excluir(){

  }

  


}
