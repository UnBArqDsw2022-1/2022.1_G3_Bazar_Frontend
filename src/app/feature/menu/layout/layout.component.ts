import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  visibilidadeDoCarrinho : boolean


  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    ) {
      this.visibilidadeDoCarrinho = false;
    }

  ngOnInit(): void {
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
