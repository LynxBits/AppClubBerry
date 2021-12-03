import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, FormFieldTypes } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ProfileCardComponent } from '../base/profile-card/profile-card.component';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {

  user: CognitoUserInterface | undefined;
  authState: AuthState | undefined;
  formFields: FormFieldTypes;

  constructor(private ref: ChangeDetectorRef, public router: Router, private zone: NgZone) {
    this.formFields = [
     
      {
        type: "email",
        label: "Email-Adresse",
        placeholder: "Email-Adresse",
        inputProps: { required: true, autocomplete: "email" },
      },
      {
        type: "password",
        label: "Passwort",
        placeholder: "Passwort",
        inputProps: { required: true, autocomplete: "new-password" },
      },

    ];
  }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
      if (this.authState == AuthState.SignedIn) {
        console.log("Signed in: redirecting to profile.");
        this.zone.run(() => { this.router.navigate(['/profile']); });
      }else{
        console.log("Signed out: redirecting to auth.");
        this.zone.run(() => { this.router.navigate(['/auth']); });
      }
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
