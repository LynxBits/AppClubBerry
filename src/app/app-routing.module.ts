import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AuthComponent } from './auth/auth.component';
import { ImpressComponent } from './impress/impress.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PolicyComponent } from './policy/policy.component';
import { ProfileCardComponent } from './base/profile-card/profile-card.component';
import { ClubCardComponent } from './base/club-card/club-card.component';
import { EventCardComponent } from './base/event-card/event-card.component';
import { DepartmentComponent } from './base/department/department.component';
import { ClubListComponent } from './base/club-list/club-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', component: AuthComponent },
  { path: 'impress', component: ImpressComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'profile', component: ProfileCardComponent },
  { path: 'club', component: ClubCardComponent },
  { path: 'clublist', component: ClubListComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'event', component: EventCardComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
