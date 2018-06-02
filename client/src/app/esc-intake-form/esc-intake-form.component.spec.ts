import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscIntakeFormComponent } from './esc-intake-form.component';

describe('EscIntakeFormComponent', () => {
  let component: EscIntakeFormComponent;
  let fixture: ComponentFixture<EscIntakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscIntakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscIntakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
