import { LocalStorageService } from './local-storage.service';
import { CarrinhoComponent } from './../feature/menu/carrinho/carrinho.component';
import { Pedido } from './../models/Pedido.model';
import { ItemPedido } from './../models/ItemPedido.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private _http: HttpClient,
    private _storage: LocalStorageService,
  ) { }

  public addProdutoAoCarrinho(produto: Produto): ItemPedido[] {
    const carrinho = this._storage.getCarrinho();
    const index = carrinho.findIndex(item => item.produto.id === produto.id);

    if (index === -1) {
      carrinho.push({
        produto,
        quantidade: 1,
      });
    } else {
      const item = carrinho[index];
      carrinho[index] = {
        ...item,
        quantidade: item.quantidade + 1,
      };
    }

    this._storage.setCarrinho(carrinho);
    return carrinho;
  }
  public excluir(idProduto: number): ItemPedido[] {
    const NovoCarrinho = this._storage.getCarrinho().filter( item => idProduto !== item.produto.id)
    this._storage.setCarrinho(NovoCarrinho)
    return NovoCarrinho
  }

  public incrementar(idProduto: number): ItemPedido[] {
    const carrinho = this._storage.getCarrinho();
    console.log(carrinho)
    const index = carrinho.findIndex(item => item.produto.id === idProduto);

    if (index !== -1) {
      const item = carrinho[index];
      carrinho[index] = {
        ...item,
        quantidade: item.quantidade + 1,
      };
    }

    this._storage.setCarrinho(carrinho);

    return carrinho;
  }

  public decrementar(idProduto: number): ItemPedido[] {
    const carrinho = this._storage.getCarrinho();
    const index = carrinho.findIndex(item => item.produto.id === idProduto);

    if (index !== -1) {
      const item = carrinho[index];

      if ( item.quantidade === 1 ){
        return this.excluir(idProduto)
      }


      carrinho[index] = {
        ...item,
        quantidade: item.quantidade - 1,
      };
    }

    if (carrinho[index].quantidade <= 0) {
      carrinho.splice(index, 1);
      return [];
    }

    this._storage.setCarrinho(carrinho);

    return carrinho;
  }


}
