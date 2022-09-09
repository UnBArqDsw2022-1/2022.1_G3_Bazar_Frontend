import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ItemdocarrinhoComponent } from './carrinho/itemdocarrinho/itemdocarrinho.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



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
    MatIconModule,
  ],
  exports: [
    LayoutComponent,
    CarrinhoComponent,
    ItemdocarrinhoComponent

  ]
})
export class MenuModule { }
