import { Usuario } from './../models/usuario.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private _http: HttpClient,
  ) { }

  public cadastrarUsuario(usuario: Usuario): Observable<any> {
    return this._http.post(`${environment.baseUrl}/usuarios`, usuario);
  }

  public consultZipCode(zipCode: string):  Observable<any> {
    return this._http.get(`https://viacep.com.br/ws/${zipCode}/json/`);
  }

}
