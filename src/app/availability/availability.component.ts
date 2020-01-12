import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../authentication.service';
import {AvailabilityService} from '../api/services';
import {Availability} from '../api/models/availability';
import {EditAvailabilityHourDialogComponent} from '../edit-availability-hour-dialog/edit-availability-hour-dialog.component';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  constructor(private availabilityApi: AvailabilityService, private snackBar: MatSnackBar, private authService: AuthenticationService, public dialog: MatDialog) {}

  @Input() availability: Availability;
  @Output() removeAvailability = new EventEmitter<Availability>();

  ngOnInit() {}

  delete() {
    this.removeAvailability.emit(this.availability);
  }

  edit() {
    const dialogRef = this.dialog.open(EditAvailabilityHourDialogComponent, {
      width: '250px',
      data: this.availability
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        return;
      }

      if (result.endTime.localeCompare(result.startTime) <= 0) {
        this.snackBar.open('L\'heure de début doit être strictement plus petite que l\'heure de fin' , 'Ok');
        return;
      }

      this.availabilityApi.patchApiAvailability({id: this.availability.id, dayOfWeek: this.availability.dayOfWeek, rowVersion: this.availability.rowVersion, startTime: result.startTime, endTime: result.endTime}).subscribe(ok => {
        this.availability.startTime = result.startTime;
        this.availability.endTime = result.endTime;
        this.availability.rowVersion = ok.rowVersion;
      }, error => {
        if (error.status === 401) {
          this.authService.logout();
          this.snackBar.open('Votre session a expiré', 'Ok');
        } else if (error.status === 403) {
          this.authService.logout();
          this.snackBar.open('Il semblerait que vous ne soyez plus relookeuse', 'Ok');
        } else if (error.status === 409 && error.error.errorType === 'AVAILABILITY_ALREADY_EXIST') {
          this.snackBar.open('L\'horaire que vous voulez ajouter rentre en conflit avec un horaire existant' , 'Ok');
        } else if (error.status === 409 || error.status === 404) {
          this.snackBar.open('Il semblerait que l\'horaire aie été modifié. Rechargez celui-ci pour le modifier', 'Ok');
        } else {
          this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
        }
      });
    });
  }
}
