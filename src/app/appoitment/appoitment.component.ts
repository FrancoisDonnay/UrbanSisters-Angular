import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Appointment} from '../api/models/appointment';
import {AppointmentService} from '../api/services';
import {EditTarifPriceDialogComponent} from '../edit-tarif-price-dialog/edit-tarif-price-dialog.component';
import {AppointmentCancelDialogueComponent} from '../appointment-cancel-dialogue/appointment-cancel-dialogue.component';

@Component({
  selector: 'app-appoitment',
  templateUrl: './appoitment.component.html',
  styleUrls: ['./appoitment.component.css']
})
export class AppoitmentComponent implements OnInit {

  dataSource: Array<Appointment> = [];
  pageIndex = 0;
  pageSize = 5;
  totalCount = 0;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'date', 'accepted', 'makeup', 'cancelRaison', 'mark', 'finished', 'actions'];

  constructor(private appointmentApi: AppointmentService, private authService: AuthenticationService, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData(this.pageSize, this.pageIndex);
  }

  pageChange(event) {
    this.getData(event.pageSize, event.pageIndex);
  }

  private getData(pageSize: number, pageIndex: number) {
    this.appointmentApi.getApiAppointmentPro({pageSize: pageSize, pageIndex: pageIndex}).subscribe(ok => {
      this.dataSource = ok.items;
      this.totalCount = ok.totalCount;
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if (error.status === 403) {
        this.authService.logout();
        this.snackBar.open('Il semblerait que vous ne soyez plus une relookeuse', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
  }

  statusChange(accepted: boolean, appointment:Appointment) {
    if(!accepted) {
      const dialogRef = this.dialog.open(AppointmentCancelDialogueComponent, {
        width: '250px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === undefined)
        {
          return;
        }

        this.appointmentApi.patchApiAppointmentId({id: appointment.id, body:{accepted:false, cancelMessage:result ,rowVersion:appointment.rowVersion}}).subscribe(ok => {
          appointment.rowVersion = ok.rowVersion;
          appointment.finished = true;
          appointment.cancelRaison = result;
        }, error => {
          if (error.status === 401) {
            this.authService.logout();
            this.snackBar.open('Votre session a expiré', 'Ok');
          } else if (error.status === 403) {
            this.authService.logout();
            this.snackBar.open('Il semblerait que vous ne soyez plus une relookeuse', 'Ok');
          } else if (error.status === 409) {
            this.snackBar.open('Il semblerait que le rendez-vous aie déjà subit une modification. Rechargez la page pour récupérer la dernière version', 'Ok');
          } else {
            this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
          }
        });
      });
    } else {
      this.appointmentApi.patchApiAppointmentId({id: appointment.id, body:{accepted:true, rowVersion:appointment.rowVersion}}).subscribe(ok => {
        appointment.rowVersion = ok.rowVersion;
        appointment.accepted = true;
      }, error => {
        if (error.status === 401) {
          this.authService.logout();
          this.snackBar.open('Votre session a expiré', 'Ok');
        } else if (error.status === 403) {
          this.authService.logout();
          this.snackBar.open('Il semblerait que vous ne soyez plus une relookeuse', 'Ok');
        } else if (error.status === 409) {
          this.snackBar.open('Il semblerait que le rendez-vous aie déjà subit une modification. Rechargez la page pour récupérer la dernière version', 'Ok');
        } else {
            this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
        }
      });
    }
  }
}
