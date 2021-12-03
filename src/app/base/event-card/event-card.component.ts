import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() begin :string = "";
  @Input() end :string = "";
  @Input() header :string = "";
  @Input() subHeader :string = "";

  subscriber!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  actionYes(){

  }
  actionNotSure(){

  }

  actionNo(){

  }

}
