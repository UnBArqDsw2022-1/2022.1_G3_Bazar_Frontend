import { PedidoService } from './../../../../services/pedido.service';
import { Component, Input, OnInit } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';

@Component({
  selector: 'app-itemdocarrinho',
  templateUrl: './itemdocarrinho.component.html',
  styleUrls: ['./itemdocarrinho.component.css']
})
export class ItemdocarrinhoComponent implements OnInit {
  @Input()
  itemPedido: ItemPedido | any

  constructor(
    private pedidoService: PedidoService,
  ) {
    this.itemPedido = {} as ItemPedido
   }

  ngOnInit(): void {
  }

  public incrementar(): void {
    this.itemPedido = this.pedidoService.incrementar(this.itemPedido.produto.id);
    console.log(this.itemPedido)
  }

  public decrementar(): void {
    this.itemPedido = this.pedidoService.decrementar(this.itemPedido.produto.id);
  }

  excluir(){

  }

}
