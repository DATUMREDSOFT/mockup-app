import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrendaComponent } from './brenda.component';

describe('BrendaComponent', () => {
  let component: BrendaComponent;
  let fixture: ComponentFixture<BrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
