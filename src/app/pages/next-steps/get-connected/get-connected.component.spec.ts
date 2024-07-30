import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConnectedComponent } from './get-connected.component';

describe('GetConnectedComponent', () => {
  let component: GetConnectedComponent;
  let fixture: ComponentFixture<GetConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetConnectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
