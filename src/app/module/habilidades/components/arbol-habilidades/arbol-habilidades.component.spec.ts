import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolHabilidadesComponent } from './arbol-habilidades.component';

describe('ArbolHabilidadesComponent', () => {
  let component: ArbolHabilidadesComponent;
  let fixture: ComponentFixture<ArbolHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArbolHabilidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbolHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
