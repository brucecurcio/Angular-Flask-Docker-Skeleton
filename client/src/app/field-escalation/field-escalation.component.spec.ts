import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldEscalationComponent } from './field-escalation.component';

describe('FieldEscalationComponent', () => {
  let component: FieldEscalationComponent;
  let fixture: ComponentFixture<FieldEscalationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldEscalationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldEscalationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
