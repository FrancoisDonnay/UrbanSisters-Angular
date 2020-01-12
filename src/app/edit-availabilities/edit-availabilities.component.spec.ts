import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvailabilitiesComponent } from './edit-availabilities.component';

describe('EditAvailabilitiesComponent', () => {
  let component: EditAvailabilitiesComponent;
  let fixture: ComponentFixture<EditAvailabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAvailabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvailabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
