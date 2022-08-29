import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  @Input()
  visible : boolean

  @Output() 
  notify = new EventEmitter();

  constructor() {
    this.visible = false;
   }

}
