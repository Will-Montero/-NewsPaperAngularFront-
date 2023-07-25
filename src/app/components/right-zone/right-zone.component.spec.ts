import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightZoneComponent } from './right-zone.component';

describe('RightZoneComponent', () => {
  let component: RightZoneComponent;
  let fixture: ComponentFixture<RightZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightZoneComponent]
    });
    fixture = TestBed.createComponent(RightZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
