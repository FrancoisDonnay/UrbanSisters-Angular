import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tarif} from '../api/models/tarif';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditTarifPriceDialogComponent} from '../edit-tarif-price-dialog/edit-tarif-price-dialog.component';
import {TarifService} from '../api/services/tarif.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  constructor(private tarifApi: TarifService, private snackBar: MatSnackBar, private authService: AuthenticationService, public dialog: MatDialog) {
  }

  @Input() tarif: Tarif;
  @Output() removeTarif = new EventEmitter<Tarif>();

  ngOnInit() {
  }

  deleteTarif() {
    this.removeTarif.emit(this.tarif);
  }

  edit() {
    const dialogRef = this.dialog.open(EditTarifPriceDialogComponent, {
      width: '250px',
      data: this.tarif
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined)
      {
        return;
      }

      this.tarifApi.patchApiTarif({service: this.tarif.service, rowVersion: this.tarif.rowVersion, price: result}).subscribe(ok => {
        this.tarif.price = result;
        this.tarif.rowVersion = ok.rowVersion;
      }, error => {
        if (error.status === 401) {
          this.authService.logout();
          this.snackBar.open('Votre session a expiré', 'Ok');
        } else if (error.status === 403) {
          this.authService.logout();
          this.snackBar.open('Il semblerait que vous ne soyez plus relookeuse', 'Ok');
        } else if (error.status === 409 || error.status === 404) {
          this.snackBar.open('Il semblerait que le tarif aie été modifié. Rechargez celui-ci pour le modifier', 'Ok');
        } else {
          this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
        }
      });
    });
  }
}
