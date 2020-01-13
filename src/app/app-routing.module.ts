import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationGuard} from './authentication.guard';
import {LoginComponent} from './login/login.component';
import {AccueilComponent} from './accueil/accueil.component';
import {RelookeuseInscriptionComponent} from './relookeuse-inscription/relookeuse-inscription.component';
import {StatsComponent} from './stats/stats.component';
import {UsersListComponent} from './users-list/users-list.component';
import {ProfilComponent} from './profil/profil.component';
import {AppoitmentComponent} from './appoitment/appoitment.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticationGuard],
    data: {
      onlyNoAuth : true
    }
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthenticationGuard],
    data: {
      roleWhitelist: 'admin'
    }
  },
  {
    path: 'users',
    component: UsersListComponent,
    canActivate: [AuthenticationGuard],
    data: {
      roleWhitelist: 'admin'
    }
  },
  {
    path: 'relookeuseInscription',
    component: RelookeuseInscriptionComponent,
    canActivate: [AuthenticationGuard],
    data: {
      roleBlackList: 'relookeuse'
    }
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AuthenticationGuard],
    data: {
      roleWhitelist: 'relookeuse'
    }
  },
  {
    path: 'appointments',
    component: AppoitmentComponent,
    canActivate: [AuthenticationGuard],
    data: {
      roleWhitelist: 'relookeuse'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
