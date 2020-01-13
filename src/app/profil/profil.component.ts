import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {RelookeuseService} from '../api/services';
import {Relookeuse} from '../api/models/relookeuse';
import {MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthenticationService, private relookeuseApi: RelookeuseService, private snackBar: MatSnackBar) { }
  loading: boolean = true;
  relookeuse: Relookeuse;
  rowVersion: string;
  infoGroup: FormGroup;
  lock: boolean = false;

  ngOnInit() {
    this.infoGroup = new FormGroup({
      description: new FormControl(null, Validators.required)
    });

    this.relookeuseApi.getApiRelookeuseMe().subscribe(ok => {
      this.relookeuse = ok;
      this.rowVersion = ok.rowVersion;
      this.loading = false;
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

  enregister() {
    this.lock = true;
    this.relookeuseApi.patchApiRelookeuse({description: this.infoGroup.value.description, isPro: this.relookeuse.isPro, rowVersion: this.rowVersion}).subscribe( ok => {
      this.rowVersion = ok.rowVersion;
      this.lock = false;
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if (error.status === 403 || error.status === 404) {
        this.authService.logout();
        this.snackBar.open('Il semblerait que vous ne soyez plus une relookeuse', 'Ok');
      } else if (error.status === 409) {
        this.snackBar.open('Il semblerait que la relookeuse aie été modifié. Rechargez celui-ci pour le modifier', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
      this.lock = false;
    })
  }
}
