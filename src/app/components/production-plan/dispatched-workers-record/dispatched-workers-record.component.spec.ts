import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchedWorkersRecordComponent } from './dispatched-workers-record.component';

describe('DispatchedWorkersRecordComponent', () => {
  let component: DispatchedWorkersRecordComponent;
  let fixture: ComponentFixture<DispatchedWorkersRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchedWorkersRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchedWorkersRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
