import { Produto } from "./Produto.model";

export interface ItemPedido {
    produto : Produto;
    quantidade : number;
    desconto? : number;
}
