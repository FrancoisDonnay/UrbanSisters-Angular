import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationGuard} from './authentication.guard';
import {LoginComponent} from './login/login.component';
import {AccueilComponent} from './accueil/accueil.component';
import {RelookeuseInscriptionComponent} from './relookeuse-inscription/relookeuse-inscription.component';

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
    path: 'relookeuseInscription',
    component: RelookeuseInscriptionComponent,
    canActivate: [AuthenticationGuard],
    data: {
      //todo
      //roleBlackList: 'relookeuse'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
