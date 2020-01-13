import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EditTarifsComponent} from '../edit-tarifs/edit-tarifs.component';
import {Tarif} from '../api/models/tarif';

@Component({
  selector: 'app-appointment-cancel-dialogue',
  templateUrl: './appointment-cancel-dialogue.component.html',
  styleUrls: ['./appointment-cancel-dialogue.component.css']
})
export class AppointmentCancelDialogueComponent implements OnInit {
  messageGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTarifsComponent>) {}

  ngOnInit(){
    this.messageGroup = new FormGroup({
      message: new FormControl(null, [Validators.required])
    });
  }
}
