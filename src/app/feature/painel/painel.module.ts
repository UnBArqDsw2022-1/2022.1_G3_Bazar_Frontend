import { ProdutoComponent } from './produto/produto.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCardComponent } from './produto/produto-card/produto-card.component';
import { MatCardModule } from '@angular/material/card';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoCardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
})
export class PainelModule { }
