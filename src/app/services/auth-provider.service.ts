import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {
  providedAuthUsername = '';

constructor() { }

async getAuthUsername(){
  Auth.currentAuthenticatedUser().then((data) => {
    this.providedAuthUsername = data.username;
    console.log("service: " + this.providedAuthUsername);
  }).catch((err) => {
       console.log("service: " + this.providedAuthUsername + " " + err);
       this.providedAuthUsername = '';
     });
     return this.providedAuthUsername;
}

}
