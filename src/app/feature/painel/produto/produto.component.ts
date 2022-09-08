import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Paginacao } from 'src/app/models/paginacao.model';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos$: Observable<Paginacao<Produto>> = EMPTY;

  constructor(
    private _produtoService: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.produtos$ = this._produtoService.listarProdutos();
  }

}
