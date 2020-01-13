import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import {ApiModule} from './api/api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { RelookeuseInscriptionComponent } from './relookeuse-inscription/relookeuse-inscription.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './api/RequestInterceptor';
import { ChooseProfilPictureComponent } from './choose-profil-picture/choose-profil-picture.component';
import { EditTarifsComponent } from './edit-tarifs/edit-tarifs.component';
import { TarifComponent } from './tarif/tarif.component';
import { EditAvailabilitiesComponent } from './edit-availabilities/edit-availabilities.component';
import { AvailabilityComponent } from './availability/availability.component';
import { EditTarifPriceDialogComponent } from './edit-tarif-price-dialog/edit-tarif-price-dialog.component';
import { EditAvailabilityHourDialogComponent } from './edit-availability-hour-dialog/edit-availability-hour-dialog.component';
import { DayOfWeekPipe } from './day-of-week.pipe';
import { StatsComponent } from './stats/stats.component';
import { UsersListComponent } from './users-list/users-list.component';
import {ChartsModule} from 'ng2-charts';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => RequestInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    NavbarComponent,
    RelookeuseInscriptionComponent,
    InfoDialogComponent,
    ChooseProfilPictureComponent,
    EditTarifsComponent,
    TarifComponent,
    EditAvailabilitiesComponent,
    AvailabilityComponent,
    EditTarifPriceDialogComponent,
    EditAvailabilityHourDialogComponent,
    DayOfWeekPipe,
    StatsComponent,
    UsersListComponent,
    EditPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ApiModule.forRoot({rootUrl: 'https://urbansisters.azurewebsites.net'}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatListModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule
  ],
  entryComponents:[
    InfoDialogComponent,
    EditTarifPriceDialogComponent,
    EditAvailabilityHourDialogComponent
  ],
  providers: [
    RequestInterceptor,
    API_INTERCEPTOR_PROVIDER,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 10000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
