import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogoService } from 'src/app/services/dialogo.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private _auth: AuthService,
    private _fb: FormBuilder,
    private _dialogo: DialogoService,
  ) {
    this.formLogin = this._fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  public login(): void {
    this._auth.login(this.formLogin.value).subscribe({
      next: (response) => {
        this._dialogo.exibirDialogo('Sucesso!', 'Login efetuado com sucesso!', 5000, 'success', false).subscribe({
          next: () => {
            this.formLogin.reset();
          }
        });
      },

      error: (error) => {
        this._dialogo.exibirDialogo('Erro!', 'E-mail ou senha incorretos, tente novamente.', 5000, 'error', false);
      }
    });
  }

}
