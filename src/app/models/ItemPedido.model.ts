import { Produto } from "./Produto.model";

export interface ItemPedido{
    
    produto : Produto;
    quantidade : Number
    preco:Number
    desconto? : Number
}