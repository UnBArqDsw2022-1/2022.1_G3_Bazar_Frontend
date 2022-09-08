import { PedidoService } from './../../../services/pedido.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProdutoComponent } from '../../painel/produto/produto.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  @Input()
  visibilidade: boolean;

  @Output()
  notify;

  itens: ItemPedido[] = [];

  constructor(
    private _storage: LocalStorageService,
    private _pedidoService : PedidoService

  ) {
    this.visibilidade = true;
    this.notify = new EventEmitter()
  }

  public incrementar(produtoId:number): void {
    this.itens = this._pedidoService.incrementar(produtoId);
  }

  public decrementar(produtoId:number): void {
    this.itens = this._pedidoService.decrementar(produtoId);
  }

  public precoTotal():number{
    let sum = 0;
    for (let e of this.itens)
      sum += e.produto.preco * e.quantidade

    return sum
  }



  ngOnInit(): void {
    const itensCarrinho: ItemPedido[] = [
      {
        produto: {
          id: 1,
          nome: 'Teste',
          preco: 10.0,
        },

        quantidade: 2,
      },

      {
        produto: {
          id: 2,
          nome: 'Teste 2',
          preco: 12.0,
        },

        quantidade: 4,
      },
      {
        produto: {
          id: 3,
          nome: 'Teste',
          preco: 10.0,
        },

        quantidade: 2,
      },

      {
        produto: {
          id: 4,
          nome: 'Teste 2',
          preco: 12.0,
        },

        quantidade: 4,
      },
      {
        produto: {
          id: 5,
          nome: 'Teste',
          preco: 10.0,
        },

        quantidade: 2,
      },

      {
        produto: {
          id: 6,
          nome: 'Teste 2',
          preco: 12.0,
        },

        quantidade: 4,
      },
      {
        produto: {
          id: 7,
          nome: 'Teste',
          preco: 10.0,
        },

        quantidade: 2,
      },

      {
        produto: {
          id: 8,
          nome: 'Teste 2',
          preco: 12.0,
        },

        quantidade: 4,
      },
    ];

    this._storage.setCarrinho(itensCarrinho);
    this.itens = this._storage.getCarrinho();
  }

}
