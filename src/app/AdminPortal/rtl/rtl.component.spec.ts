import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTLComponent } from './rtl.component';

describe('RTLComponent', () => {
  let component: RTLComponent;
  let fixture: ComponentFixture<RTLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
