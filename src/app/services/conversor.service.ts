import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor() { }

  public converterArquivoParaBase64(arquivo: File): FileReader {
    const reader = new FileReader();
    reader.readAsDataURL(arquivo);
    return reader;
  }

}
