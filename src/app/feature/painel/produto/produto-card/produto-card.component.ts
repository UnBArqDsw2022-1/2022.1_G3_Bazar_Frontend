import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { DialogoService } from 'src/app/services/dialogo.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input() produto: Produto = {} as Produto;

  imagemSelecionada: string = '';
  contadorImagem = 0;

  constructor(
    private _pedidoService: PedidoService,
    private _dialogo: DialogoService,
  ) { }

  ngOnInit(): void {
    this.imagemSelecionada = this.produto.imagens[this.contadorImagem]?.imagemUrl || 'assets/imagens/prod-default.jpg';
  }

  public proximaImagem(): void {
    this.contadorImagem = this.contadorImagem + 1;
    this.imagemSelecionada = this.produto.imagens[this.contadorImagem]?.imagemUrl;
  }

  public imagemAnterior(): void {
    this.contadorImagem = this.contadorImagem -1;
    this.imagemSelecionada = this.produto.imagens[this.contadorImagem]?.imagemUrl;
  }

  public adicionarAoCarrinho(): void {
    this._pedidoService.addProdutoAoCarrinho(this.produto);
    this._dialogo.exibirDialogo('Sucesso!', `Produto ${this.produto.nome} adicionado ao carrinho.`);
  }

}
