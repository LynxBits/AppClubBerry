import { APIService } from 'src/app/API.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { errorStateMatcher } from '../profile-card/profile-card.component';
import { AuthProviderService } from 'src/app/services/auth-provider.service';



@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.scss']
})
export class ClubCardComponent implements OnInit {
  header: string = "";

  club: any = "";
  clubName: string = "";
  clubManagers: any = "";
  clubMembers: any = "";
  contact: string | null| undefined = "";
  street: string | null| undefined = "";
  streetnumber: string | null | undefined = "";
  city: string | null| undefined = "";
  postalCode: string | null| undefined = "";
  country: string | null| undefined = "";
  tel: string | null| undefined = "";
  description: string | null| undefined = "";
  sportKinds: any = "";

  readonly: boolean = false;
  profileCreated: Boolean = false;

  clubNameFormControl = new FormControl('', [Validators.required]);
  kontaktFormControl = new FormControl('', [Validators.required]);
  matcher = new errorStateMatcher();

  constructor(private api: APIService, private authCache: AuthProviderService) {
    this.getClub();
   }

  ngOnInit() {
    this.getClub();
    this.header = "Verein"; // hier dann die Daten aus der Datenbank setzen | Input geht ja gar nicht
  }

  async createClub() {

    this.clubManagers= this.authCache.providedAuthUsername;
    this.clubMembers = this.authCache.providedAuthUsername;
    // data array
    const newClub = {
      clubname: this.clubName, // key
      clubmanagers: this.clubManagers,
      clubmembers: this.clubMembers,
      contact: this.contact,
      street: this.street,
      streetnumber: this.streetnumber,
      city: this.city,
      post: this.postalCode,
      country: this.country,
      phone: this.tel,
      description: this.description,
      kinds: this.sportKinds,
    }

    await this.api.CreateClub(newClub);

    this.profileCreated = true;
  }

  async getClub() {
    let response = await this.api.GetClub(this.clubName);
    console.log("Try loading club. Got response: " + response);
    this.club = response;
    this.clubManagers = response.clubmanagers;
    this.clubMembers = response.clubmembers;
    this.contact = response.contact;
    this.street = response.street;
    this.streetnumber = response.streetnumber;
    this.city = response.city;
    this.postalCode = response.post;
    this.country = response.country;
    this.tel = response.phone;
    this.description = response.description;
    this.sportKinds = response.kinds;
    console.log("Club profile is: " + this.club);
    if (this.clubName === '') {
      this.profileCreated = false;
    }
    else {
      this.profileCreated = true;
    }
  }

  async updateClub() {
    // data array
    const newClub = {
      clubname: this.clubName, // key
      clubmanagers: this.clubManagers,
      clubmembers: this.clubMembers,
      contact: this.contact,
      street: this.street,
      streetnumber: this.streetnumber,
      city: this.city,
      post: this.postalCode,
      country: this.country,
      phone: this.tel,
      description: this.description,
      kinds: this.sportKinds,
    }

    await this.api.UpdateClub(newClub);
  }


  save(){

  }

}
