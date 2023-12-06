import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingItemDisplayComponent } from './thing-item-display.component';

describe('ThingItemDisplayComponent', () => {
  let component: ThingItemDisplayComponent;
  let fixture: ComponentFixture<ThingItemDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThingItemDisplayComponent]
    });
    fixture = TestBed.createComponent(ThingItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
