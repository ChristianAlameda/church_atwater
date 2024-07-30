import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBelieveComponent } from './what-we-believe.component';

describe('WhatWeBelieveComponent', () => {
  let component: WhatWeBelieveComponent;
  let fixture: ComponentFixture<WhatWeBelieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatWeBelieveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeBelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
