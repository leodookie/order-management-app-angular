import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignUpService } from '../sign-up/sign-up.service';
import { UserInfo } from '../user.info';

@Injectable()
export class LoginGuard implements CanActivate {

  user:UserInfo;

  constructor(private signUpService:SignUpService,
  private router:Router) { }


canActivate(){
  this.signUpService.userDetail.subscribe( user => this.user=user);
  if(this.user.isLoggedIn){
    return true;
  }
  else{
    this.router.navigate(['/login']);
    return false;
  }
}



}
