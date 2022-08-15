import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';

import { UsuariosComponent } from './usuarios.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormModule } from 'src/app/shared/form/form.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsuariosComponent,
    CadastroClienteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    FormModule,
    RouterModule,
  ]
})
export class UsuariosModule { }
