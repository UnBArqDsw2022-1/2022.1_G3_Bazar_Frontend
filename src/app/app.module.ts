import { MatSelectModule } from '@angular/material/select';
import { CrudProdutoComponent } from './feature/painel/crud-produto/crud-produto.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './feature/usuarios/usuarios.module';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProdutoComponent } from './feature/painel/produto/produto.component';
import { CompraComponent } from './feature/painel/compra/compra.component';
import { AutentificacaoComponent } from './feature/autentificacao/autentificacao.component';
import { PainelComponent } from './feature/painel/painel.component';
import { LayoutComponent } from './feature/painel/layout/layout.component';
import { LoginComponent } from './feature/autentificacao/login/login.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CompraComponent,
    AutentificacaoComponent,
    PainelComponent,
    LayoutComponent,
    LoginComponent,
    CrudProdutoComponent,
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
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
