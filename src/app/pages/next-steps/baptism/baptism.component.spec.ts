import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptismComponent } from './baptism.component';

describe('BaptismComponent', () => {
  let component: BaptismComponent;
  let fixture: ComponentFixture<BaptismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaptismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaptismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
