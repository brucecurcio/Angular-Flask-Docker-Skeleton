import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportApiComponent } from './support-api.component';

describe('SupportApiComponent', () => {
  let component: SupportApiComponent;
  let fixture: ComponentFixture<SupportApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
