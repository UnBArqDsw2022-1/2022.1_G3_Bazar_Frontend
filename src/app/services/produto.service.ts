import { Observable } from 'rxjs';
import { Produto } from './../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';


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

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${environment.baseUrl}/produtos`, produto);
  }
}
