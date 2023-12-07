import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersDisplaySkeletonComponent } from './containers-display-skeleton.component';

describe('ContainersDisplaySkeletonComponent', () => {
  let component: ContainersDisplaySkeletonComponent;
  let fixture: ComponentFixture<ContainersDisplaySkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersDisplaySkeletonComponent]
    });
    fixture = TestBed.createComponent(ContainersDisplaySkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
