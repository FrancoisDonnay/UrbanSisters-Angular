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
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule,
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
    DayOfWeekPipe
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
    FormsModule
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
