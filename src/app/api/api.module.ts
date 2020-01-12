/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AppointmentService } from './services/appointment.service';
import { AvailabilityService } from './services/availability.service';
import { DefaultService } from './services/default.service';
import { InscriptionService } from './services/inscription.service';
import { LoginService } from './services/login.service';
import { PortfolioService } from './services/portfolio.service';
import { RelookeuseService } from './services/relookeuse.service';
import { TarifService } from './services/tarif.service';
import { UserService } from './services/user.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AppointmentService,
    AvailabilityService,
    DefaultService,
    InscriptionService,
    LoginService,
    PortfolioService,
    RelookeuseService,
    TarifService,
    UserService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
