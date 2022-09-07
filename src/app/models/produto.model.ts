import { Imagem } from "./imagem.model";

export interface Produto {
    id?: number;
    nome: string;
    preco: number;
    imagens: Array<Imagem>;
    categorias?: Array<{id: number}>;
}
