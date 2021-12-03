import { Component, OnInit } from '@angular/core';
import { AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    events: string[] = [];
    opened: boolean = false;
    authState: AuthState | undefined;
   
  constructor() {

   }

  

  ngOnInit() {
    
  }

}
