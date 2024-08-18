import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService, private router: Router) {
    console.log('loading AuthService...');

    this.configure();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/realms/personal-account-manager',
    redirectUri: window.location.origin,
    clientId: 'personal-account-manager-pkce-client',
    scope: 'openid profile',
    responseType: 'code',
    showDebugInformation: true,
  };

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    // this.oauthService.tokenValidationHandler() = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        this.router.navigate(['/user-home']);
      }
    });
  }

  isAuthenticated() {
    return this.oauthService.hasValidAccessToken();
  }

  public get getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  public get identityClaims(): any {
    return this.oauthService.getIdentityClaims();
  }
}
