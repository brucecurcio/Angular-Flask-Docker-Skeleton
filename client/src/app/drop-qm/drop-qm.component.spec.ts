import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropQMComponent } from './drop-qm.component';

describe('DropQMComponent', () => {
  let component: DropQMComponent;
  let fixture: ComponentFixture<DropQMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropQMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropQMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
