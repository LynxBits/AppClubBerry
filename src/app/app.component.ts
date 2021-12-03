import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { onAuthUIStateChange, AuthState, CognitoUserInterface } from '@aws-amplify/ui-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent {

  title: string = 'ClubBerry\'s';
  user: CognitoUserInterface | undefined;
  authState: AuthState | undefined;

  constructor(private translationService: TranslateService, private ref: ChangeDetectorRef, public router: Router, private ngZone: NgZone) {
    translationService.setDefaultLang("de-DE");
    translationService.use("de-DE");
  }

  ngOnInit() {

    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  public navigateToPage(p: string) {

    this.ngZone.run(() => {

      this.router.navigate([`${p}`]);
     });
  }

  public selectLanguage(event: any) {
    this.translationService.use(event.target.value);
  }
}
