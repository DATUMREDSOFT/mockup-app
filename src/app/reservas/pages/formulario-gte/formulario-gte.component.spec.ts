import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGteComponent } from './formulario-gte.component';

describe('FormularioGteComponent', () => {
  let component: FormularioGteComponent;
  let fixture: ComponentFixture<FormularioGteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioGteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioGteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
