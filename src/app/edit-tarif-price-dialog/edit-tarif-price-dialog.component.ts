import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EditTarifsComponent} from '../edit-tarifs/edit-tarifs.component';
import {Tarif} from '../api/models/tarif';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-tarif-price-dialog',
  templateUrl: './edit-tarif-price-dialog.component.html',
  styleUrls: ['./edit-tarif-price-dialog.component.css']
})
export class EditTarifPriceDialogComponent implements OnInit{
  newPriceGroup: FormGroup

  constructor(
    public dialogRef: MatDialogRef<EditTarifsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tarif) {}

  ngOnInit(){
    this.newPriceGroup = new FormGroup({
      price: new FormControl(null, [Validators.required, Validators.min(0)])
    });

    this.newPriceGroup.get('price').setValue(this.data.price);
  }
}
