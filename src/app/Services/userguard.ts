import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardUser implements CanActivate {

  constructor(private _router: Router) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem("email") != null && sessionStorage.getItem("email") != "admin@gmail.com" && sessionStorage.getItem("examstarted") == null) {
        return true;
     }

    else if(sessionStorage.getItem("email") != null && sessionStorage.getItem("email") != "admin@gmail.com" && sessionStorage.getItem('examstarted') == "false"){
       return true;
     }
    
    // navigate to login page
    this._router.navigate(['/home']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}