import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOutComponent } from './help-out.component';

describe('HelpOutComponent', () => {
  let component: HelpOutComponent;
  let fixture: ComponentFixture<HelpOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
