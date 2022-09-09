import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { Injectable } from '@angular/core';
import { UsuarioLogado } from '../models/usuario-logado.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getCarrinho(): ItemPedido[] {
    const carrinho = localStorage.getItem('carrinho');
    return (carrinho != null) ? JSON.parse(carrinho) : [];
  }

  public setCarrinho(carrinho: ItemPedido[] | null): void {
    if (carrinho !== null) {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    } else {
      localStorage.removeItem('carrinho');
    }
  }

  public setDadosUsuarioLogado(dadosUsuarioLogado: UsuarioLogado | null): void {
    if (dadosUsuarioLogado !== null) {
      localStorage.setItem('usuario', JSON.stringify(dadosUsuarioLogado));
    } else {
      localStorage.removeItem('usuario');
    }
  }

  public getDadosDoUsuarioLogado(): UsuarioLogado {
    const usuario = localStorage.getItem('usuario');
    return usuario !== null ? JSON.parse(usuario) : null;
  }

}
