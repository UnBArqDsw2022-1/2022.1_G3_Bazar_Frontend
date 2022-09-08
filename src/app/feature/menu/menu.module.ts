import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ItemdocarrinhoComponent } from './carrinho/itemdocarrinho/itemdocarrinho.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: 
  [
    LayoutComponent,
    CarrinhoComponent,
    ItemdocarrinhoComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    
  ],
  exports: [
    LayoutComponent,
    CarrinhoComponent,
    ItemdocarrinhoComponent

  ]
})
export class MenuModule { }
