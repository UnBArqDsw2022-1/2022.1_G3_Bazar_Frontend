import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cadastroClienteForm: FormGroup;
  enderecoForm: FormGroup;
  isEditable = true;

  constructor(
    private _fb: FormBuilder,
  ) {
    this.cadastroClienteForm = this._fb.group({
      nome: ['', [Validators.required]],
      cpf: [''],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });

    this.enderecoForm = this._fb.group({
      cep: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      bairro: ['', [Validators.required]],
      complemento: [''],
    }),

    console.log(this.cadastroClienteForm)
  }

  ngOnInit(): void {
  }

}
