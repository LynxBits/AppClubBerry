import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { APIService } from 'src/app/API.service';
import { AuthProviderService } from 'src/app/services/auth-provider.service';



export class errorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  header :string = "Profil";
  email: String = '';

  //allProfiles: any = [];
  userProfile: any = '';
  profileCreated: Boolean = false;

  genders: Gender[] = [
    {value: 'M-0', viewValue: 'Männlich'},
    {value: 'W-1', viewValue: 'Weiblich'},
    {value: 'D-2', viewValue: 'Divers'},
  ];

  @Input() content :string = "";
  @Input() firstname :string = "";
  @Input() lastname :string = "";
  @Input() phone :string = "";
  @Input() age :number = 18;
  @Input() gender :string = "";
  @Input() street :string = "";
  @Input() streetnumber :string = "";
  @Input() city :string = "";
  @Input() plz :string = "";
  @Input() country :string = "";
  @Input() readonly : boolean = false;

  firstnameFormControl = new FormControl('', [Validators.required]);
  lastnameFormControl = new FormControl('', [Validators.required]);
  ageFormControl = new FormControl('', [Validators.required]);
  genderFormControl = new FormControl('', [Validators.required]);
  matcher = new errorStateMatcher();

  constructor(private api: APIService, private authCache: AuthProviderService) { }

  ngOnInit() {
    this.authCache.getAuthUsername();
    this.getProfile(); //? welche einträge?

  }

  async createProfile() {
    // data array
    const newProfile = {
      email: this.username, // @key
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      gender: this.gender,
      street: this.street,
      streetnumber: this.streetnumber,
      city: this.city,
      post: this.plz,
      country: this.country,
      phone: this.phone
    }

    let response = await this.api.CreateProfile(newProfile);

    this.profileCreated = true;
    //this.allProfiles.push(response);
    // debugger;
  }

  async updateProfile() {
    // data array
    const newProfile = {
      email: this.username, // @key
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      gender: this.gender,
      street: this.street,
      streetnumber: this.streetnumber,
      city: this.city,
      post: this.plz,
      country: this.country,
      phone: this.phone

    }

    let response = await this.api.UpdateProfile(newProfile);

    //this.allProfiles.push(response);
    // debugger;
  }

  // async listProfile() {
  //   let response = await this.api.ListProfiles();
  //   this.allProfiles =  response.items;
  //   console.log(this.allProfiles);
  //   console.log(this.allProfiles.length);
  //   for(var i = 0; i < this.allProfiles.length; i++){
  //       console.log(this.allProfiles[i].email + " User: " + this.username);
  //       console.log(this.allProfiles[i]);
  //       if(this.allProfiles[i].firstname === '')
  //       {
  //         this.profileCreated = false;
  //       }
  //       else{
  //         this.profileCreated = true;
  //       }
  //       if(this.allProfiles[i].email === this.username){
  //         console.log("WORKED!" + i);
  //         this.firstname = this.allProfiles[i].firstname;
  //         this.lastname = this.allProfiles[i].lastname;
  //         this.age = this.allProfiles[i].age;
  //         this.gender = this.allProfiles[i].gender;
  //         this.street = this.allProfiles[i].street;
  //         this.streetnumber = this.allProfiles[i].streetnumber;
  //         this.city = this.allProfiles[i].city;
  //         this.plz = this.allProfiles[i].post;
  //         this.country = this.allProfiles[i].country;
  //         this.phone = this.allProfiles[i].phone;
  //       }

  //       console.log("Profil erstellt: " + this.profileCreated);
  //   }
  // }

  async getProfile() {
    let response = await this.api.GetProfile(this.username);
    console.log("Try loading profile. Got response: " + response);
    this.userProfile = response;
    this.firstname = this.userProfile.firstname;
    this.lastname = this.userProfile.lastname;
    this.age = this.userProfile.age;
    this.gender = this.userProfile.gender;
    this.street = this.userProfile.street;
    this.streetnumber = this.userProfile.streetnumber;
    this.city = this.userProfile.city;
    this.plz = this.userProfile.post;
    this.country = this.userProfile.country;
    this.phone = this.userProfile.phone;
    console.log("User profile is: " + this.userProfile);
    if (this.userProfile.firstname === '') {
      this.profileCreated = false;
    }
    else {
      this.profileCreated = true;
    }
  }

  async deleteProfile() {
    // data array
    const newProfile = {
      email: this.username, // @key
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      gender: this.gender,
      street: this.street,
      streetnumber: this.streetnumber,
      city: this.city,
      post: this.plz,
      country: this.country,
      phone: this.phone

    }

    let response = await this.api.DeleteProfile(newProfile);

    //this.allProfiles.push(response);
    //debugger;
  }

  save(){
    console.log(this.gender);
  }

  get username(){
    return this.authCache.providedAuthUsername;
  }
}
