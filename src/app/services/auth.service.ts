import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioLogado } from '../models/usuario-logado.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _jwt: JwtHelperService;

  constructor(
    private _http: HttpClient,
  ) {
    this._jwt = new JwtHelperService();
  }

  public login(props : {username: string; password: string}): Observable<UsuarioLogado> {
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

    return this._http.post<UsuarioLogado>(`${environment.baseUrl}/oauth/token`, payload, {
      headers,
    });
  }

  public static getToken(): string {
    const usuario = localStorage.getItem('usuario');
    return usuario !== null ? JSON.parse(usuario).access_token : '';
  }

  public static isTokenExpirado(): boolean {
    const token = AuthService.getToken();
    const isExpirado = new JwtHelperService()
      .isTokenExpired(token);
    return isExpirado;
  }

}
