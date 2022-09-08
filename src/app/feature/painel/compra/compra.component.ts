import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  enderecoFormGroup = this._formBuilder.group({
    id: [null, Validators.required],
  });

  pagamentoFormGroup = this._formBuilder.group({
    "@type": ['', Validators.required],
    troco: [0],
    chavePix: [''],
  });

  confirmacaoFormGroup = this._formBuilder.group({

  });

  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
