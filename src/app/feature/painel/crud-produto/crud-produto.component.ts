import { Categoria } from '../../../models/categoria.model';
import { Produto } from '../../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-crud-produto',
  templateUrl: './crud-produto.component.html',
  styleUrls: ['./crud-produto.component.css']
})
export class CrudProdutoComponent implements OnInit {
  
  produto: Produto = {
    nome: 'Produto Teste',
    preco: 125.5
  }
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Operaçao executada com sucesso!')
    })
    
  }
  cancel(): void {
    this.produtoService.showMessage('Operaçao cancelada.')
  }
}
