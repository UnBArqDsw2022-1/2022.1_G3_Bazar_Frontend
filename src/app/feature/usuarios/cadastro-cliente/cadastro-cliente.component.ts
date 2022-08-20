import { Cidade } from './../../../models/cidade.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { Estado } from 'src/app/models/estado.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CidadeService } from 'src/app/services/cidade.service';
import { DialogoService } from 'src/app/services/dialogo.service';
import { EstadoService } from 'src/app/services/estado.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cadastroClienteForm: FormGroup;
  enderecoForm: FormGroup;
  isEditable = true;

  estados$: Observable<Estado[]> = EMPTY;
  cidades$: Observable<Cidade[]> = EMPTY;

  constructor(
    private _fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private _dialogo: DialogoService,
    private _estadoService: EstadoService,
    private _cidadeService: CidadeService,
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
      cidadeId: [null, [Validators.required]],
      estadoSigla: [''],
      complemento: [''],
    });
  }

  ngOnInit(): void {
    this.estados$ = this._estadoService.listarEstados();
    this.enderecoForm.get('estadoSigla')?.valueChanges
      .subscribe(estadoSigla => this.cidades$ = this._cidadeService.listarCidadesPelaUf(estadoSigla));
  }

  public cadastrarUsuario(): void {
    const usuario: Usuario = {
      ...this.cadastroClienteForm.value,
      enderecos: [
        {
          ...this.enderecoForm.value,
        }
      ],
    };

    this._usuarioService.cadastrarUsuario(usuario).subscribe({
      next: (response) => {
        this._dialogo.exibirDialogo('Sucesso!', 'Usuário cadastrado com sucesso!', 5, 'success').subscribe();
        this.isEditable = false;
      },

      error: (error) => {
        this._dialogo.exibirDialogo('Erro!', 'Não foi possível cadastrar o usuário!', 5, 'error').subscribe();
        this.isEditable = true;
      },
    });
  }

}
