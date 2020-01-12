import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RelookeuseService} from '../api/services/relookeuse.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-choose-profil-picture',
  templateUrl: './choose-profil-picture.component.html',
  styleUrls: ['./choose-profil-picture.component.css']
})
export class ChooseProfilPictureComponent implements OnInit {

  constructor(private relookeuseApi: RelookeuseService, private snackBar: MatSnackBar, private authService: AuthenticationService) { }

  pictureFormGroup: FormGroup;
  @Input() pictureUrl: string;
  @Input() rowVersion: string;
  @Output() rowVersionUpdate = new EventEmitter<String>();

  ngOnInit() {
    this.pictureFormGroup = new FormGroup({
      profilPicture: new FormControl(),
    });
  }

  onSelectFile(event) {
    if(event.target.files[0].type !== 'image/png') {
      this.snackBar.open('Seul le format Png est accepté pour les photos de profile', 'Ok');
    } else if (event.target.files[0].size > 500000) {
      this.snackBar.open('L\'image ne peut pas dépasser les 500 Ko', 'Ok');
    } else {
      this.relookeuseApi.patchApiRelookeusePicture({File: event.target.files[0], RowVersion: this.rowVersion}).subscribe(frm => {
        this.pictureUrl = frm.url;
        this.rowVersionUpdate.emit(frm.rowVersion);
      }, error => {
        if (error.status === 401) {
          this.authService.logout();
          this.snackBar.open('Votre session a expiré', 'Ok');
        } else if (error.status === 409) {
          this.snackBar.open('Il semblerait que la relookeuse aie déjà subit une modification. Merci de modifier la photo depuis l\'éditeur de profil', 'Ok');
        } else {
          this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
        }
      });
      event.target.form.reset();
    }
  }

  deletePicture() {
    this.relookeuseApi.deleteApiRelookeusePicture({rowVersion: this.rowVersion}).subscribe(ok =>{
      this.pictureUrl = null;
      this.rowVersionUpdate.emit(ok.rowVersion);
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if(error.status === 409) {
        this.snackBar.open('Il semblerait que la relookeuse aie déjà subit une modification. Merci de modifier la photo depuis l\'éditeur de profil', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
  }
}
