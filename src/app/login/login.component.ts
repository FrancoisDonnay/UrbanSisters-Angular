import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {LoginService} from '../api/services';
import {MatDialog} from '@angular/material';
import {InfoDialogComponent} from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(private apiLogin: LoginService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl()
    });
  }

  login() {
    this.apiLogin.postApiLogin({email: this.loginForm.value.email, password: this.loginForm.value.password})
      .subscribe(frm => {
        this.authenticationService.setToken(frm, this.loginForm.value.rememberMe);
        this.router.navigate(['']);
      }, error => {
        this.loading = false;
        if (error.status === 401 || error.status === 400) {
          this.dialog.open(InfoDialogComponent, {
            width: '250px',
            data: 'Email ou mot de passe incorrecte!'
          });
        } else {
          this.dialog.open(InfoDialogComponent, {
            width: '250px',
            data: 'Un problème est survenu lors de la connexion à l\'api!'
          });
        }
      });
  }
}
