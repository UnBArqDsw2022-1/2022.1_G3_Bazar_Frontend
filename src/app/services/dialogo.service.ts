import { Observable } from 'rxjs';
import { DialogoComponent } from './../shared/dialogo/dialogo.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogoService {

  private intervaloId: any;

  constructor(
    private _dialog: MatDialog,
  ) { }

  public exibirDialogo(
    titulo: string,
    mensagem: string,
    tempoExibicaoEmSeg: number | null,
    tipo: 'error' | 'success' = 'success',
    exibirBtnCancelar: boolean = true,
  ): Observable<any> {
    const config: MatDialogConfig<any> = {
      width: '40vw',
      position: {
        top: '8px',
        right: '8px',
      },
      panelClass: (tipo === 'error') ? 'bg-dialog-error' : 'bg-dialog-success',
      data: {
        titulo,
        mensagem,
        exibirBtnCancelar,
        tipo,
      },
    };

    const dialogoRef = this._dialog.open(DialogoComponent, config);

    this._setTempoDeExibicao(dialogoRef, tempoExibicaoEmSeg);

    return dialogoRef.afterClosed();
  }

  private _setTempoDeExibicao(
    dialogoRef: MatDialogRef<DialogoComponent, any>,
    tempoExibicaoEmSeg: number | null
  ): void {
    if (tempoExibicaoEmSeg) {
      clearInterval(this.intervaloId);

      this.intervaloId = setTimeout(() => {
        dialogoRef.close();
      }, 5000);
    }
  }

}
