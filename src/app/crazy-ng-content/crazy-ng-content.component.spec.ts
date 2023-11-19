import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyNgContentComponent } from './crazy-ng-content.component';

describe('CrazyNgContentComponent', () => {
  let component: CrazyNgContentComponent;
  let fixture: ComponentFixture<CrazyNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrazyNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrazyNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
