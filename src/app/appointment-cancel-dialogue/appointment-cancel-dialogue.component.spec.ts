import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCancelDialogueComponent } from './appointment-cancel-dialogue.component';

describe('AppointmentCancelDialogueComponent', () => {
  let component: AppointmentCancelDialogueComponent;
  let fixture: ComponentFixture<AppointmentCancelDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentCancelDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentCancelDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
