import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './../models/cidade.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(
    private http: HttpClient,
  ) { }

  public listarCidadesPelaUf(uf: string): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${environment.baseUrl}/cidades/estado/${uf}`);
  }

}
