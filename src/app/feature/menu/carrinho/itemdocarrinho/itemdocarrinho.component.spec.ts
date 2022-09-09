import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdocarrinhoComponent } from './itemdocarrinho.component';

describe('ItemdocarrinhoComponent', () => {
  let component: ItemdocarrinhoComponent;
  let fixture: ComponentFixture<ItemdocarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemdocarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemdocarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
