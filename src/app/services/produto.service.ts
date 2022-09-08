import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Paginacao } from '../models/paginacao.model';
import { Produto } from '../models/Produto.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
    })
  }

  public listarProdutos(idCategoria: number = 0): Observable<Paginacao<Produto>> {
    return this.http.get<Paginacao<Produto>>(`${environment.baseUrl}/produtos?idCategoria=${idCategoria}`);
  }

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${environment.baseUrl}/produtos`, produto, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + AuthService.getToken(),
      },
    });
  }

}
