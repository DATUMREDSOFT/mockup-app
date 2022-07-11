import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GteComponent } from './gte.component';

describe('GteComponent', () => {
  let component: GteComponent;
  let fixture: ComponentFixture<GteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
