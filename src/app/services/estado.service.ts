import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(
    private http: HttpClient,
  ) { }

  public listarEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${environment.baseUrl}/estados`);
  }

}
