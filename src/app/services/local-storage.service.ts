import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getCarrinho(): ItemPedido[] {
    const carrinho = localStorage.getItem('carrinho');
    return (carrinho != null) ? JSON.parse(carrinho) : [];
  }

  public setCarrinho(carrinho: ItemPedido[]): void {
    if (carrinho !== null) {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    } else {
      localStorage.removeItem('carrinho');
    }
  }

}
