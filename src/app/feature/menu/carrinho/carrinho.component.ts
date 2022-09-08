import { PedidoService } from './../../../services/pedido.service';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit, OnChanges {
  @Input()
  visibilidade: boolean;

  @Output()
  notify;

  itens: ItemPedido[] = [];

  constructor(
    private _storage: LocalStorageService,
    private _pedidoService : PedidoService,
    private _cd: ChangeDetectorRef,
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

  ngOnInit(): void {
    this.atualizarCarrinho();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.atualizarCarrinho();
  }

  public total(): number {
    const cart = this._storage.getCarrinho();
    return cart
      .map(item => item.produto.preco * item.quantidade)
      .reduce((prev, current) => prev + current, 0);
  }

  public atualizarCarrinho(): void {
    this.itens = this._storage.getCarrinho();
    this._cd.detectChanges();
  }

}
