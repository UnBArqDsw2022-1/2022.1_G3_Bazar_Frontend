import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormModule } from './form/form.module';
import { DialogoComponent } from './dialogo/dialogo.component';

@NgModule({
  declarations: [
    DialogoComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    DialogoComponent,
    FormModule,
    CommonModule,
  ],
})
export class SharedModule { }
