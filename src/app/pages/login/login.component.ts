import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
  ) {
    this.formLogin = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  public login(): void {
    this._auth.login(this.formLogin.value).subscribe({
      next: (response) => console.log(response),
    });
  }

}
