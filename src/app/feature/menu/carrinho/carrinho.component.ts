import { PedidoService } from './../../../services/pedido.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  @Input()
  visibilidade: boolean;

  @Output()
  notify = new EventEmitter();

  itens: ItemPedido[] = [];

  constructor(
    private _storage: LocalStorageService,
  ) {
    this.visibilidade = true;
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
    ];

    this._storage.setCarrinho(itensCarrinho);
    this.itens = this._storage.getCarrinho();
    console.log(this.itens);
  }

}
