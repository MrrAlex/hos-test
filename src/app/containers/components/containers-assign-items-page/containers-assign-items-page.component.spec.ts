import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersAssignItemsPageComponent } from './containers-assign-items-page.component';

describe('ContainersAssignItemsPageComponent', () => {
  let component: ContainersAssignItemsPageComponent;
  let fixture: ComponentFixture<ContainersAssignItemsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersAssignItemsPageComponent]
    });
    fixture = TestBed.createComponent(ContainersAssignItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
