import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStatesComponent } from './current-states.component';

describe('CurrentStatesComponent', () => {
  let component: CurrentStatesComponent;
  let fixture: ComponentFixture<CurrentStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
