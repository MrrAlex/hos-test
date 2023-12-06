import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersAddFormSkeletonComponent } from './containers-add-form-skeleton.component';

describe('ContainersAddFormSkeletonComponent', () => {
  let component: ContainersAddFormSkeletonComponent;
  let fixture: ComponentFixture<ContainersAddFormSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersAddFormSkeletonComponent]
    });
    fixture = TestBed.createComponent(ContainersAddFormSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
