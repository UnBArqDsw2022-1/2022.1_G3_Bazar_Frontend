import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

<<<<<<< HEAD
  constructor() { 
=======
  visibilidadeDoCarrinho : boolean

  constructor() { 
    this.visibilidadeDoCarrinho = true
  }

  alteraVisibilidadeDoCarrinho(){
    this.visibilidadeDoCarrinho  = ! this.visibilidadeDoCarrinho
>>>>>>> 67327514c1c3c818aee57de9c48204de3260b609
  }

  ngOnInit(): void {
  }

}
