import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsAddItemModalComponent } from './things-add-item-modal.component';

describe('ThingsAddItemModalComponent', () => {
  let component: ThingsAddItemModalComponent;
  let fixture: ComponentFixture<ThingsAddItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThingsAddItemModalComponent]
    });
    fixture = TestBed.createComponent(ThingsAddItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
