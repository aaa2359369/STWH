import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionPlanManagementComponent } from './production-plan-management.component';

describe('ProductionPlanManagementComponent', () => {
  let component: ProductionPlanManagementComponent;
  let fixture: ComponentFixture<ProductionPlanManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionPlanManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionPlanManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
