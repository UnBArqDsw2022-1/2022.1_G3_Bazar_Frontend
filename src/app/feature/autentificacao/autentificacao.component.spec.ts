import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificacaoComponent } from './autentificacao.component';

describe('AutentificacaoComponent', () => {
  let component: AutentificacaoComponent;
  let fixture: ComponentFixture<AutentificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
