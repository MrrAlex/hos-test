import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersAddFormComponent } from './containers-add-form.component';

describe('ContainersAddFormComponent', () => {
  let component: ContainersAddFormComponent;
  let fixture: ComponentFixture<ContainersAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersAddFormComponent]
    });
    fixture = TestBed.createComponent(ContainersAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
