import {Component, Input, OnInit} from '@angular/core';
import {Tarif} from '../api/models/tarif';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TarifService} from '../api/services';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-edit-tarifs',
  templateUrl: './edit-tarifs.component.html',
  styleUrls: ['./edit-tarifs.component.css']
})
export class EditTarifsComponent implements OnInit {

  constructor(private tarifApi: TarifService, private snackBar: MatSnackBar, private authService: AuthenticationService, public dialog: MatDialog) { }

  @Input() newRelookeuse: boolean;
  tarifs = new Array<Tarif>();
  newTarifGroup: FormGroup;

  ngOnInit() {
    this.newTarifGroup = new FormGroup({
      service: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)])
    });

    if(!this.newRelookeuse) {
      this.tarifApi.getApiTarif().subscribe(ok => {
        this.tarifs = ok;
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

  addTarif() {
    if (this.tarifs.filter(value => value.service.toLowerCase() === this.newTarifGroup.value.service.toLowerCase()).length !== 0) {
      this.snackBar.open('Le service que vous voulez ajouter existe déjà!', 'Ok');
      this.newTarifGroup.reset();
      return;
    }

    this.tarifApi.postApiTarif({service: this.newTarifGroup.value.service , price: this.newTarifGroup.value.price}).subscribe(ok => {
      this.tarifs.push(ok)
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
    this.newTarifGroup.reset();
  }

  delete(tarif: Tarif) {
    this.tarifApi.deleteApiTarifResponse({service: tarif.service, rowVersion: tarif.rowVersion}).subscribe(ok => {
      this.tarifs = this.tarifs.filter(t => t.service.toLowerCase() !== tarif.service.toLowerCase());
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
  }
}
