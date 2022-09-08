import { Estado } from 'src/app/models/estado.model';
import { Cidade } from './cidade.model';

export interface Endereco {
  id: number;
  cep: number;
  bairro: string;
  cidadeId: number;
  complemento?: string;
}

export interface EnderecoUser extends Endereco {
  numero: number;
  cidade: Cidade & {
    estado: Estado;
  };
}
