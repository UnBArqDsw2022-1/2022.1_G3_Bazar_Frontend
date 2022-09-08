export interface UsuarioLogado {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  nomeDeUsuario: string;
  papeis: Papeis[];
  usuarioId: number;
}

interface Papeis {
  id: number;
  autoridade: string;
}
