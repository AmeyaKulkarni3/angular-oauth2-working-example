import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService:AuthService = inject(AuthService);
  const router:Router = inject(Router);
  console.log(route);
  console.log(state);
  console.log(authService);
  
  if(authService.isAuthenticated()){
    console.log('authenticated');
    return true;
  } else {
    console.log('Not authenticated');
    
    router.navigate(['/']);
    return false;
  }

};
