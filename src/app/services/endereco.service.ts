import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Endereco, EnderecoUser } from '../models/endereco.model';
import { PedidoFinal } from '../models/Pedido.model';

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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjI3NDQ3NzcsInVzZXJfbmFtZSI6ImRvdWdsYXNAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiI5NWQzYmIxOS03YzQxLTRkZmYtYjk1OS1mNzljYTk2Mjg4ZjUiLCJjbGllbnRfaWQiOiJiYXphci1mZ2EiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.YMlEJ8XmbXXtuBAQT9yoUhWWb7e_TcMcW7smgjMUOPc',
      }
    });
  }

}
