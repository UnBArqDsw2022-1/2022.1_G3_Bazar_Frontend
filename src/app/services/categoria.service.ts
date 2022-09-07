import { Categoria } from './../models/categoria.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.baseUrl}/categorias`);
  }
}
