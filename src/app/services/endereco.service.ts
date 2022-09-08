import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Endereco, EnderecoUser } from '../models/endereco.model';
import { PedidoFinal } from '../models/Pedido.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http: HttpClient,
  ) { }

  public obterEnderecosDoUsuarioLogado(): Observable<EnderecoUser[]> {
    return this.http.get<EnderecoUser[]>(`${environment.baseUrl}/enderecos`, {
      headers: {
        'Authorization': 'Bearer ' + AuthService.getToken(),
      }
    });
  }

}
