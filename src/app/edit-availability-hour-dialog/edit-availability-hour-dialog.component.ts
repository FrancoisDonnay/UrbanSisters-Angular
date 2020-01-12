import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EditTarifsComponent} from '../edit-tarifs/edit-tarifs.component';
import {Availability} from '../api/models/availability';

@Component({
  selector: 'app-edit-availability-hour-dialog',
  templateUrl: './edit-availability-hour-dialog.component.html',
  styleUrls: ['./edit-availability-hour-dialog.component.css']
})
export class EditAvailabilityHourDialogComponent implements OnInit {
  newAvailabilityHours: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTarifsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Availability) {}

  ngOnInit(){
    this.newAvailabilityHours = new FormGroup({
      startTime: new FormControl(null, [Validators.required, Validators.pattern('[0-2][0-9]:[0-5][0-9]')]),
      endTime: new FormControl(null, [Validators.required, Validators.pattern('[0-2][0-9]:[0-5][0-9]')])
    });

    this.newAvailabilityHours.get('startTime').setValue(this.data.startTime);
    this.newAvailabilityHours.get('endTime').setValue(this.data.endTime);
  }
}
