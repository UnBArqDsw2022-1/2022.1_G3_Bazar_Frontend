import { BrowserModule } from '@angular/platform-browser';
import { EMPTY, map, Observable } from 'rxjs';
import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { UsuarioLogado } from 'src/app/models/usuario-logado.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  visibilidadeDoCarrinho: boolean;

  categorias$: Observable<Categoria[]> = EMPTY;

  usuario: UsuarioLogado = {} as UsuarioLogado;

  constructor(
    private categoriaService: CategoriaService,
    private _storage: LocalStorageService,
    ) {
      this.visibilidadeDoCarrinho = false;
    }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService
      .listarCategorias()
      .pipe(map(categorias => categorias.filter(cat => (cat.nome !== 'Masculino' && cat.nome !== 'Feminino' && cat.nome !== 'Kids'))));
    this.usuario = this._storage.getDadosDoUsuarioLogado();
  }

  alteraVisibilidadeDoCarrinho(){
    this.visibilidadeDoCarrinho  = ! this.visibilidadeDoCarrinho
  }

  logout(){
    this._storage.setDadosUsuarioLogado(null);
    this.usuario = this._storage.getDadosDoUsuarioLogado();
  }

  isTokenExpirado() {
    return AuthService.isTokenExpirado();
  }

  getPapeis(): string {
    if (this.usuario && this.usuario.papeis) {
      return this.usuario.papeis
      .map(p => p.autoridade)
      .join(', ')
      .replace('ROLE_', '');
    }
    return '';
  }
}
