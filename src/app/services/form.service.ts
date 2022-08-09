import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public hasError(atributo: string, atributoErro: string, form: FormGroup) {
    const controle = form.get(atributo);

    if (controle?.errors && controle.errors[atributoErro]) {
      return controle.errors[atributoErro];
    }
  }

}
