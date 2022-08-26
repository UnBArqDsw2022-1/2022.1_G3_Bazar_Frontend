import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/autentificacao/login/login.component';
import { CadastroClienteComponent } from './feature/usuarios/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios/cadastro-cliente', component: CadastroClienteComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
