import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralZoneComponent } from './central-zone.component';

describe('CentralZoneComponent', () => {
  let component: CentralZoneComponent;
  let fixture: ComponentFixture<CentralZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralZoneComponent]
    });
    fixture = TestBed.createComponent(CentralZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
