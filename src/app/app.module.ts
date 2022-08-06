import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoComponent } from './feature/produto/produto.component';
import { CompraComponent } from './feature/compra/compra.component';
import { AutentificacaoComponent } from './core/autentificacao/autentificacao.component';
import { ServicoComponent } from './core/servico/servico.component';
import { LoginComponent } from './feature/autentificacao/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CompraComponent,
    AutentificacaoComponent,
    ServicoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
