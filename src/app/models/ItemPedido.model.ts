import { Produto } from '../models/Produto.model';

export interface ItemPedido {
    produto : Produto;
    quantidade : number;
    desconto? : number;
}
