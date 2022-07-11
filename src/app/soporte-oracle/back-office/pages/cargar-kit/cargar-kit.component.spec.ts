import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarKitComponent } from './cargar-kit.component';

describe('CargarKitComponent', () => {
  let component: CargarKitComponent;
  let fixture: ComponentFixture<CargarKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
