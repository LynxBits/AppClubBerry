import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { errorStateMatcher } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  header :string = "";
  clubName : string = "";
  street : string = "";
  streetnumber : number = 0;
  city : string = "";
  plz : string = "";
  tel : string = "";
  info : string = "";
  readonly: boolean = false;

  clubNameFormControl = new FormControl('', [Validators.required]);
  kontaktFormControl = new FormControl('', [Validators.required]);
  matcher = new errorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.header = "Abteilung"; // hier dann die Daten aus der Datenbank setzen | Input geht ja gar nicht
  }

  save(){

  }
}
