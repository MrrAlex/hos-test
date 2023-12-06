import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersAddPageComponent } from './containers-add-page.component';

describe('ContainersAddPageComponent', () => {
  let component: ContainersAddPageComponent;
  let fixture: ComponentFixture<ContainersAddPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersAddPageComponent]
    });
    fixture = TestBed.createComponent(ContainersAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
