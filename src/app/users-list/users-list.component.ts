import { Component, OnInit } from '@angular/core';
import {User} from '../api/models/user';
import {UserService} from '../api/services';
import {AuthenticationService} from '../authentication.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  dataSource: Array<User> = [];
  pageIndex = 0;
  pageSize = 5;
  totalCount = 0;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'admin', 'relookeuse'];

  constructor(private userApi: UserService, private authService: AuthenticationService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData(this.pageSize, this.pageIndex);
  }

  pageChange(event) {
    this.getData(event.pageSize, event.pageIndex);
  }

  private getData(pageSize: number, pageIndex: number) {
    this.userApi.getApiUser({pageSize: pageSize, pageIndex: pageIndex}).subscribe(ok => {
      this.dataSource = ok.items;
      this.totalCount = ok.totalCount;
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if (error.status === 403) {
        this.authService.logout();
        this.snackBar.open('Il semblerait que vous ne soyez plus admin', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
  }

  setAdmin(user: User, event) {
    this.userApi.patchApiUserAdmin({id: user.id, isAdmin: event.checked, rowVersion: user.rowVersion}).subscribe(ok => {
      user.rowVersion = ok.rowVersion;
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if (error.status === 403) {
        this.authService.logout();
        this.snackBar.open('Il semblerait que vous ne soyez plus admin', 'Ok');
      } else if (error.status === 409 || error.status === 404) {
        this.snackBar.open('Il semblerait que l\'utilisateur aie été modifié. Rechargez celui-ci pour le modifier', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
  }
}
