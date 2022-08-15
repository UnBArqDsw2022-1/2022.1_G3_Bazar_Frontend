import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { InputTextoComponent } from './input-texto/input-texto.component';
import { InputSelectComponent } from './input-select/input-select.component';

@NgModule({
  declarations: [
    InputTextoComponent,
    InputSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    InputTextoComponent,
  ],
})
export class FormModule { }
