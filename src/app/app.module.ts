import { LayoutModule } from './feature/layout/layout.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ProdutoComponent } from './feature/painel/produto/produto.component';
import { CompraComponent } from './feature/painel/compra/compra.component';
import { AutentificacaoComponent } from './feature/autentificacao/autentificacao.component';
import { PainelComponent } from './feature/painel/painel.component';
import { LoginComponent } from './feature/autentificacao/login/login.component';
import { AuthService } from './services/auth.service';
import { UsuariosModule } from './feature/usuarios/usuarios.module';
import { CarrinhoComponent } from './feature/painel/carrinho/carrinho.component';
import { ItemdocarrinhoComponent } from './feature/painel/carrinho/itemdocarrinho/itemdocarrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CompraComponent,
    AutentificacaoComponent,
    PainelComponent,
    LoginComponent,
    ItemdocarrinhoComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    UsuariosModule,
    LayoutModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
