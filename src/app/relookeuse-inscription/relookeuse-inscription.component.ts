import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-relookeuse-inscription',
  templateUrl: './relookeuse-inscription.component.html',
  styleUrls: ['./relookeuse-inscription.component.css']
})
export class RelookeuseInscriptionComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl(null, Validators.required),
    });
    this.secondFormGroup = new FormGroup({
      secondCtrl: new FormControl(null, Validators.required),
    });
  }
}
