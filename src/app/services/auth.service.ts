import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { HttpClient } from '@angular/common/http';

interface Token {
  access_token: string;
  expires_in: number;
  nomeDeUsuario: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  usuarioId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  public login(props : {username: string; password: string}): Observable<Token> {
    const app = `bazar-fga:bazar-fga`;

    const headers = {
      Authorization: `Basic ${window.btoa(app)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const data = {
      username: props.username,
      password: props.password,
      grant_type: 'password',
    };

    const payload = stringify(data);

    return this._http.post<Token>('http://localhost:8080/oauth/token', payload, {
      headers,
    });
  }

}
