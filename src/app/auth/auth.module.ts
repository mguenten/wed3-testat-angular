import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {SharedModule} from '@app/shared';

import {LoginComponent} from './components/login.component';
import {LogoutComponent} from './components/logout.component';
import {RegisterComponent} from './components/register.component';

import {TokenInterceptor} from './resources/token-interceptor';
import {AuthResourceService} from './resources/auth-resource.service';

import {SecurityTokenStore} from './services/credential-management/security-token-store';
import {AuthService} from './services/auth.service';


const EXPORTED_DECLARATIONS = [
  LoginComponent, LogoutComponent, RegisterComponent
  // TODO: Add declarations here, if additional components should be exported
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
  // TODO: Add declarations here, if additional components should be registered for the Auth module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    FormsModule,
    SharedModule
  ],
  exports: EXPORTS,
  providers: [AuthResourceService]
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        // DI Providers (Services, Tokens, Factories...) to be used globally and instantiate only once

        // TODO: Add services/guards/... here, if additional classes are placed within the Auth moduley
        SecurityTokenStore,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }]
    };
  }
}
