import { ItemPedido } from "./ItemPedido.model"

export interface Pedido{
    id?: Number
    data:string
    itemPedidos : ItemPedido[]
}

export interface PedidoFinal {
  enderecoEntrega: {
    id: number;
  };

  pagamento: {
    "@type": string;
    troco?: number;
    chavePix?: string;
  };

  itens: Array<ItemPedidoFinal>;
}

interface ItemPedidoFinal {
  produto: {
    id: number;
  };

  quantidade: number;
}
