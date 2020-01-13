import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PortfolioService} from '../api/services';
import {PortfolioPicture} from '../api/models/portfolio-picture';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  constructor(private portfolioApi: PortfolioService, private snackBar: MatSnackBar, private authService: AuthenticationService) { }

  pictureFormGroup: FormGroup;
  @Input() newRelookeuse: boolean;
  pictureList: Array<PortfolioPicture> = [];

  ngOnInit() {
    this.pictureFormGroup = new FormGroup({
      profilPicture: new FormControl(),
    });

    if(!this.newRelookeuse) {
      this.portfolioApi.getApiPortfolio().subscribe(ok => {
        this.pictureList = ok;
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

  onSelectFile(event) {
    if(event.target.files[0].type !== 'image/png') {
      this.snackBar.open('Seul le format Png est accepté pour les photos de portfolio', 'Ok');
    } else if (event.target.files[0].size > 500000) {
      this.snackBar.open('L\'image ne peut pas dépasser les 500 Ko', 'Ok');
    } else {
      this.portfolioApi.postApiPortfolio(event.target.files[0]).subscribe(frm => {
        this.pictureList.push(frm);
      }, error => {
        if (error.status === 401 || error.status === 403) {
          this.authService.logout();
          this.snackBar.open('Votre session a expiré', 'Ok');
        } else {
          this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
        }
      });
      event.target.form.reset();
    }
  }

  deletePicture(picture: PortfolioPicture) {
    this.portfolioApi.deleteApiPortfolioId(picture.id).subscribe(ok =>{
      this.pictureList = this.pictureList.filter(p => p.id != picture.id);
    }, error => {
      if (error.status === 401 || error.status === 403) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
  }

}
