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
    return this.http.post<Produto>(`${environment.baseUrl}/produtos`, produto, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjI1OTcyOTcsInVzZXJfbmFtZSI6ImRvdWdsYXNAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiJmZGI2ODFlNS0xM2UzLTRiM2QtOTI5Yy03M2ZmMmQyZTQ3MTciLCJjbGllbnRfaWQiOiJiYXphci1mZ2EiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.rjLRhtFVNB1HRheG46uewCK-_Fc0ZnGmEEON2DPi1Po',
      },
    });
  }
}
