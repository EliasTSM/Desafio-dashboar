import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVeiculosComponent } from './card-veiculos.component';

describe('CardVeiculosComponent', () => {
  let component: CardVeiculosComponent;
  let fixture: ComponentFixture<CardVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
