import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {MatDialog, MatHorizontalStepper, MatSlideToggle, MatSnackBar} from '@angular/material';
import {RelookeuseService} from '../api/services';

@Component({
  selector: 'app-relookeuse-inscription',
  templateUrl: './relookeuse-inscription.component.html',
  styleUrls: ['./relookeuse-inscription.component.css']
})
export class RelookeuseInscriptionComponent implements OnInit {
  constructor(private authService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog,
              private relookeuseApi: RelookeuseService,
              private snackBar: MatSnackBar) {
  }

  @ViewChild('stepper', {static: true}) stepper: MatHorizontalStepper;
  @ViewChild('sliderPro', {static: true}) sliderPro: MatSlideToggle;
  inscriptionGroup: FormGroup;
  loading = false;
  rowVersion: string;

  ngOnInit() {
    this.inscriptionGroup = new FormGroup({
      description: new FormControl(null, Validators.required)
    });
  }

  sendInscription() {
    this.relookeuseApi.postApiRelookeuse({description: this.inscriptionGroup.value.description, isPro: this.sliderPro.checked}).subscribe(
      ok => {
      this.authService.updateToken({access_token: ok.newToken.access_token, expire_at: ok.newToken.expire_at});
      this.rowVersion = ok.rowVersion;
      this.stepper.next();
    },
    error => {
        if (error.status === 401) {
          this.authService.logout();
          this.snackBar.open('Votre session a expiré', 'Ok');
        } else if (error.status === 409) {
          this.authService.logout();
          this.snackBar.open('Il semplerait que vous soyez déjà une relookeuse. Veuillez-vous reconnecter pour avoir toutes les fonctionnalités', 'Ok');
        } else {
          this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
        }
    });
  }
}
