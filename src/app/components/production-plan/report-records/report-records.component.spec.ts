import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRecordsComponent } from './report-records.component';

describe('ReportRecordsComponent', () => {
  let component: ReportRecordsComponent;
  let fixture: ComponentFixture<ReportRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
