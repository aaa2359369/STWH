import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRTContentComponent } from './qrt-content.component';

describe('QRTContentComponent', () => {
  let component: QRTContentComponent;
  let fixture: ComponentFixture<QRTContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRTContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRTContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
