import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBrendaComponent } from './formulario-brenda.component';

describe('FormularioBrendaComponent', () => {
  let component: FormularioBrendaComponent;
  let fixture: ComponentFixture<FormularioBrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBrendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
