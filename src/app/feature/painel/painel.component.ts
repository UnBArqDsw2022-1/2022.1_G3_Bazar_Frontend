import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  visibilidadeDoCarrinho : boolean

  constructor() { 
    this.visibilidadeDoCarrinho = true
  }

  alteraVisibilidadeDoCarrinho(){
    this.visibilidadeDoCarrinho  = ! this.visibilidadeDoCarrinho
  }

  ngOnInit(): void {
  }

}
