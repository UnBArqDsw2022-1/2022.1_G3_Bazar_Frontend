import { FormService } from './../../../services/form.service';
import { FormControlName, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.css']
})
export class InputTextoComponent implements OnInit {

  @Input() group: FormGroup = {} as FormGroup;
  @Input() formName: string = '';
  @Input() titulo: string = '';
  @Input() dica: string = '';
  @Input() tipoCampo: string = 'text';
  @Input() placeholder: string = '';

  constructor(public form: FormService) { }

  ngOnInit(): void {
  }

}
