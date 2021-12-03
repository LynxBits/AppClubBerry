// Angular Main Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Translation i18n
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AWS
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular'
import awsconfig from "../aws-exports";

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';

// Routing and Services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthProviderService } from './services/auth-provider.service';

// Component Views
import { AuthComponent } from './auth/auth.component';
import { CardComponent } from './card/card.component';
import { ImpressComponent } from './impress/impress.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PolicyComponent } from './policy/policy.component';
import { EventCardComponent } from './base/event-card/event-card.component';
import { ProfileCardComponent } from './base/profile-card/profile-card.component';
import { ClubCardComponent } from './base/club-card/club-card.component';
import { DepartmentComponent } from './base/department/department.component';
import { EventCreateCardComponent } from './base/event-create-card/event-create-card.component';
import { ClubListComponent } from './base/club-list/club-list.component';


Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: 'eu-central-1',
    //identityPoolId: '',
    userPoolId: 'XXXXX',
    userPoolWebClientId: 'XXXXX',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }
});

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CardComponent,
    ImpressComponent,
    ContactComponent,
    AboutusComponent,
    PolicyComponent,
    EventCardComponent,
    ProfileCardComponent,
    ClubCardComponent,
    DepartmentComponent,
    EventCreateCardComponent,
    ClubListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AmplifyUIAngularModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatSortModule,
    MatListModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de-DE',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthProviderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
