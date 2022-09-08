import { Observable, EMPTY } from 'rxjs';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ConversorService } from 'src/app/services/conversor.service';
import { Imagem } from 'src/app/models/imagem.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Produto } from 'src/app/models/Produto.model';

@Component({
  selector: 'app-crud-produto',
  templateUrl: './crud-produto.component.html',
  styleUrls: ['./crud-produto.component.css']
})
export class CrudProdutoComponent implements OnInit {

  produto: Produto = {
    id: 0,
    nome: 'Produto Teste',
    preco: 125.5,
    imagens: [],
    categorias: [],
  };

  categorias$: Observable<Categoria[]> = EMPTY;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private conversorService: ConversorService,
  ) { }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.listarCategorias();
  }

  public cadastrarProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Operaçao executada com sucesso!')
    });
  }

  public cancel(): void {
    this.produtoService.showMessage('Operaçao cancelada.')
  }

  public onUploadDeImagemDeProduto(event: any) {
    for (let file of event.target.files) {
      const str = this.conversorService.converterArquivoParaBase64(file);
      str.onload = () => {
        this.produto.imagens?.push({
          imagemUrl: str.result as string,
        } as Imagem);
      }
    }
  }

  public removerImagem(index: number): void {
    this.produto.imagens?.splice(index, 1);
  }

  public obterCategoriasSelecionadas(categoriasIds: Array<{id: number}>): void {
    this.produto.categorias = categoriasIds;
  }

}
