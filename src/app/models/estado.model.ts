import { Cidade } from "./cidade.model";

export interface Estado {
  id?: number;
  sigla: string;
  nome: string;
  cidades?: Cidade[];
}
