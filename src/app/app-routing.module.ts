import { ProdutoComponent } from './feature/painel/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/autentificacao/login/login.component';
import { CadastroClienteComponent } from './feature/usuarios/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios/cadastro-cliente', component: CadastroClienteComponent },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
