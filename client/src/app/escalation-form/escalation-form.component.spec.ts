import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationFormComponent } from './escalation-form.component';

describe('EscalationFormComponent', () => {
  let component: EscalationFormComponent;
  let fixture: ComponentFixture<EscalationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
