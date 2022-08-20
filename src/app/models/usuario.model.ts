import { Endereco } from "./endereco.model";

export interface Usuario {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  enderecos: Endereco[];
}
