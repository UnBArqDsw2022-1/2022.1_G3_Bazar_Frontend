import { ItemPedido } from "./ItemPedido.model"

export interface Pedido{
    id?: Number
    data:string
    itemPedidos : ItemPedido[]
}