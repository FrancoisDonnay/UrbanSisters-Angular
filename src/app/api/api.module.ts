/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AppointmentService } from './services/appointment.service';
import { DefaultService } from './services/default.service';
import { InscriptionService } from './services/inscription.service';
import { LoginService } from './services/login.service';
import { RelookeuseService } from './services/relookeuse.service';
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
    DefaultService,
    InscriptionService,
    LoginService,
    RelookeuseService,
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
