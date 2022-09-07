import { Produto } from '../../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Buffer } from 'buffer';
import { ConversorService } from 'src/app/services/conversor.service';
import { Imagem } from 'src/app/models/imagem.model';

@Component({
  selector: 'app-crud-produto',
  templateUrl: './crud-produto.component.html',
  styleUrls: ['./crud-produto.component.css']
})
export class CrudProdutoComponent implements OnInit {

  produto: Produto = {
    nome: 'Produto Teste',
    preco: 125.5,
    imagens: [],
    categorias: [],
  }

  constructor(
    private produtoService: ProdutoService,
    private conversorService: ConversorService,
  ) { }

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

  public onUploadDeImagemDeProduto(event: any) {
    for (let file of event.target.files) {
      const str = this.conversorService.converterArquivoParaBase64(file);
      str.onload = () => {
        this.produto.imagens.push({
          imagemUrl: str.result as string,
        } as Imagem);
      }
    }
  }

  public removerImagem(index: number): void {
    this.produto.imagens.splice(index, 1);
  }

}
