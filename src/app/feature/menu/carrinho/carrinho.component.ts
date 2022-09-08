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
    this.itens = this._storage.getCarrinho();
  }

}
