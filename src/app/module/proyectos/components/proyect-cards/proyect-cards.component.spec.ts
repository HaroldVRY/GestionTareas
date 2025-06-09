import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectCardsComponent } from './proyect-cards.component';

describe('ProyectCardsComponent', () => {
  let component: ProyectCardsComponent;
  let fixture: ComponentFixture<ProyectCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyectCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
