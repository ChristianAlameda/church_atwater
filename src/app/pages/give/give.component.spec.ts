import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveComponent } from './give.component';

describe('GiveComponent', () => {
  let component: GiveComponent;
  let fixture: ComponentFixture<GiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
