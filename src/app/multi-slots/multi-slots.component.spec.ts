import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotsComponent } from './multi-slots.component';

describe('MultiSlotsComponent', () => {
  let component: MultiSlotsComponent;
  let fixture: ComponentFixture<MultiSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
