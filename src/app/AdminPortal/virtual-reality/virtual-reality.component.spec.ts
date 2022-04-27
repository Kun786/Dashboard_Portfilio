import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualRealityComponent } from './virtual-reality.component';

describe('VirtualRealityComponent', () => {
  let component: VirtualRealityComponent;
  let fixture: ComponentFixture<VirtualRealityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualRealityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualRealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
