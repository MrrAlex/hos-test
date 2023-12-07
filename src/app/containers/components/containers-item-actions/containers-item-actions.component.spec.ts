import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersItemActionsComponent } from './containers-item-actions.component';

describe('ContainersItemActionsComponent', () => {
  let component: ContainersItemActionsComponent;
  let fixture: ComponentFixture<ContainersItemActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersItemActionsComponent]
    });
    fixture = TestBed.createComponent(ContainersItemActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
