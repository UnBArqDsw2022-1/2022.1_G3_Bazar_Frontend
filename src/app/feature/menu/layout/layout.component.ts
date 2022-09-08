import { EMPTY, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  visibilidadeDoCarrinho: boolean;

  categorias$: Observable<Categoria[]> = EMPTY;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private categoriaService: CategoriaService,
    ) {
      this.visibilidadeDoCarrinho = false;
    }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.listarCategorias();
  }

  alteraVisibilidadeDoCarrinho(){
    this.visibilidadeDoCarrinho  = ! this.visibilidadeDoCarrinho
  }

  logout(){}

    routerLogin(){
      if( this.router.url.match (/login/)){
        console.log("teste");
        return true;
      }
      return false;
    }
}
