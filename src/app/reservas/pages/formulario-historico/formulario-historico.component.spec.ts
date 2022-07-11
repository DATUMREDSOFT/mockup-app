import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHistoricoComponent } from './formulario-historico.component';

describe('FormularioHistoricoComponent', () => {
  let component: FormularioHistoricoComponent;
  let fixture: ComponentFixture<FormularioHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
