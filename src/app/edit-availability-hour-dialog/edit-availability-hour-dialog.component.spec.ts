import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvailabilityHourDialogComponent } from './edit-availability-hour-dialog.component';

describe('EditAvailabilityHourDialogComponent', () => {
  let component: EditAvailabilityHourDialogComponent;
  let fixture: ComponentFixture<EditAvailabilityHourDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAvailabilityHourDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvailabilityHourDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
