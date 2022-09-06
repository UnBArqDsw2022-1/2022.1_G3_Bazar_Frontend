import { CarrinhoComponent } from './../feature/menu/carrinho/carrinho.component';
import { Pedido } from './../models/Pedido.model';
import { ItemPedido } from './../models/ItemPedido.model';
import { Produto } from './../models/Produto.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private _http: HttpClient, carrinho: CarrinhoComponent
  ) { }

  addProdutoCarrinho( itemPedido: ItemPedido, listadeItens : ItemPedido[]): void {
    listadeItens.push(itemPedido);
  }

}
