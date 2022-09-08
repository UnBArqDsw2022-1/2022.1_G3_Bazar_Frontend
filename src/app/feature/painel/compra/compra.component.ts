import { ItemPedido } from 'src/app/models/ItemPedido.model';
import { Observable, EMPTY } from 'rxjs';
import { EnderecoUser } from './../../../models/endereco.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatStepper } from '@angular/material/stepper';
import { PedidoService } from 'src/app/services/pedido.service';
import { DialogoService } from 'src/app/services/dialogo.service';
import { PedidoFinal } from 'src/app/models/Pedido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  enderecos$: Observable<EnderecoUser[]> = EMPTY;
  pedidos: ItemPedido[] = [];
  isEditable = true;
  enderecoSelecionado: EnderecoUser = {} as EnderecoUser;
  pagamentoSelecionado: any = {};

  enderecoFormGroup = this._formBuilder.group({
    id: [null, Validators.required],
  });

  pagamentoFormGroup = this._formBuilder.group({
    "@type": ['', Validators.required],
    troco: [0],
    chavePix: [''],
  });

  confirmacaoFormGroup = this._formBuilder.group({

  });

  @ViewChild('stepper') stepper: MatStepper = {} as MatStepper;

  constructor(
    private _formBuilder: FormBuilder,
    private _enderecoService: EnderecoService,
    private _storage: LocalStorageService,
    private _pedidoService: PedidoService,
    private _dialogoService: DialogoService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.enderecos$ = this._enderecoService.obterEnderecosDoUsuarioLogado();
    this.pedidos = this._storage.getCarrinho();
  }

  public totalPedido(): number {
    return this.pedidos
      .map(ped => ped.produto.preco * ped.quantidade)
      .reduce((prev, curr) => prev + curr, 0);
  }

  public finalizarPedido(): void {
    const pedido: PedidoFinal = {
      enderecoEntrega: {
        id: this.enderecoSelecionado.id,
      },
      pagamento: this.pagamentoSelecionado,
      itens: this._storage.getCarrinho(),
    };

    this._pedidoService.finalizarPedido(pedido).subscribe(() => {
      this._dialogoService.exibirDialogo('Sucesso', 'Pedido cadastrado');
      this.stepper.reset();
      this.isEditable = false;
      this._storage.setCarrinho(null);
      this._router.navigateByUrl('/');
    });
  }

}
