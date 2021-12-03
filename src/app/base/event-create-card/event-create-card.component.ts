import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-event-create-card',
  templateUrl: './event-create-card.component.html',
  styleUrls: ['./event-create-card.component.scss']
})
export class EventCreateCardComponent implements OnInit {
  EventNameFormControl = new FormControl('', [Validators.required]);
  EventBeginFormControl = new FormControl('', [Validators.required]);
  EventEndFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  eventName: string = "";
  date!: Date;
  beginn: string = "";
  end: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  save(){

  }

}
