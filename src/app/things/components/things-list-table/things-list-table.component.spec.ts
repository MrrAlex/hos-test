import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsListTableComponent } from './things-list-table.component';

describe('ThingsListTableComponent', () => {
  let component: ThingsListTableComponent;
  let fixture: ComponentFixture<ThingsListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThingsListTableComponent]
    });
    fixture = TestBed.createComponent(ThingsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
