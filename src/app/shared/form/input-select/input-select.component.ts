import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  @Input() group: FormGroup = {} as FormGroup;
  @Input() formName: string = '';
  @Input() titulo: string = '';
  @Input() dica: string = '';

  @Input() opcoes: any[] = [];
  @Input() valor: string = '';
  @Input() valorExibido: string = '';

  constructor(
    public form: FormService,
  ) { }

  ngOnInit(): void {
  }

}
