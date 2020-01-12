import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Availability} from '../api/models/availability';
import {AvailabilityService} from '../api/services';

@Component({
  selector: 'app-edit-availabilities',
  templateUrl: './edit-availabilities.component.html',
  styleUrls: ['./edit-availabilities.component.css']
})
export class EditAvailabilitiesComponent implements OnInit {

  constructor(private availabilityApi: AvailabilityService, private snackBar: MatSnackBar, private authService: AuthenticationService, public dialog: MatDialog) { }

  @Input() newRelookeuse: boolean;
  availabilities = new Array<Availability>();
  newAvailabilityGroup: FormGroup;
  dayOfWeer = [{dayNum: 1, value: 'Lundi'},{dayNum: 2, value: 'Mardi'},{dayNum: 3, value: 'Mercredi'},{dayNum: 4, value: 'Jeudi'},{dayNum: 5, value: 'Vendredi'},{dayNum: 6, value: 'Samedi'},{dayNum: 7, value: 'Dimanche'}];

  ngOnInit() {
    this.newAvailabilityGroup = new FormGroup({
      dayOfWeek: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(7)]),
      startTime: new FormControl(null, [Validators.required, Validators.pattern('[0-2][0-9]:[0-5][0-9]')]),
      endTime: new FormControl(null, [Validators.required, Validators.pattern('[0-2][0-9]:[0-5][0-9]')])
    });

    if(!this.newRelookeuse)
    {
      this.availabilityApi.getApiAvailability().subscribe(ok => {
        this.availabilities = ok;
      }, error => {
        if (error.status === 401) {
          this.authService.logout();
          this.snackBar.open('Votre session a expiré', 'Ok');
        } else if (error.status === 403) {
          this.authService.logout();
          this.snackBar.open('Il semblerait que vous ne soyez plus relookeuse', 'Ok');
        } else {
          this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
        }
      });
    }
  }

  add() {
    if (this.newAvailabilityGroup.value.endTime.localeCompare(this.newAvailabilityGroup.value.startTime) <= 0) {
      this.snackBar.open('L\'heure de début doit être strictement plus petite que l\'heure de fin' , 'Ok');
      return;
    }

    if (this.availabilities.filter(value => value.dayOfWeek === this.newAvailabilityGroup.value.dayOfWeek && (value.endTime === this.newAvailabilityGroup.value.endTime || value.startTime === this.newAvailabilityGroup.value.startTime)).length !== 0) {
      this.snackBar.open('L\'horaire que vous voulez ajouter rentre en conflit avec un horaire existant' , 'Ok');
      return;
    }

    this.availabilityApi.postApiAvailability({dayOfWeek: this.newAvailabilityGroup.value.dayOfWeek , startTime: this.newAvailabilityGroup.value.startTime, endTime: this.newAvailabilityGroup.value.endTime}).subscribe(ok => {
      this.availabilities.push(ok)
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if (error.status === 403) {
        this.authService.logout();
        this.snackBar.open('Il semblerait que vous ne soyez plus relookeuse', 'Ok');
      } else if (error.status === 409) {
        this.snackBar.open('Le service que vous voulez ajouter existe déjà!', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
    this.newAvailabilityGroup.reset();
  }

  delete(availability: Availability) {
    this.availabilityApi.deleteApiAvailability({id: availability.id, rowVersion: availability.rowVersion}).subscribe(ok => {
      this.availabilities = this.availabilities.filter(av => av.id !== availability.id);
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if (error.status === 403) {
        this.authService.logout();
        this.snackBar.open('Il semblerait que vous ne soyez plus relookeuse', 'Ok');
      } else if (error.status === 409 || error.status === 404) {
        this.snackBar.open('Il semblerait que l\'horaire aie été modifié. Rechargez celui-ci pour le modifier', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
  }
}
