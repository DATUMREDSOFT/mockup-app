import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAreaComponent } from './formulario-area.component';

describe('FormularioAreaComponent', () => {
  let component: FormularioAreaComponent;
  let fixture: ComponentFixture<FormularioAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
