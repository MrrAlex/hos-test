import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersDisplayPageComponent } from './containers-display-page.component';

describe('ContainersDisplayPageComponent', () => {
  let component: ContainersDisplayPageComponent;
  let fixture: ComponentFixture<ContainersDisplayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersDisplayPageComponent]
    });
    fixture = TestBed.createComponent(ContainersDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
