import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { APIService } from 'src/app/API.service';

export interface ClubInterface {
  clubname: any | undefined;
  city: any | undefined;
  clubmanagers: any | undefined;
  clubmembercount: any | undefined;
}

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {
  @Input() header :string = "Club List";

  @Input() clubname :string = "";
  @Input() clubmanagers :any = "";
  @Input() clubmembers :any = "";
  @Input() contact :string | null| undefined = "";
  @Input() street :string | null| undefined = "";
  @Input() streetnumber :string | null| undefined = "";
  @Input() city :string | null| undefined = "";
  @Input() post :string | null| undefined = "";
  @Input() country :string | null| undefined = "";
  @Input() phone :string | null| undefined = "";
  @Input() description :string | null| undefined = "";
  @Input() kinds :any = "";

  allClubs: any = [];

  clubmembercount: any = 0;
  unsortedClubList: ClubInterface[] = [];
  sortedData: ClubInterface[] = [];
  clicked = false;

  constructor(private api: APIService) {
  }

 async ngOnInit() {
    //this.getTester();
    await this.listClub();
    this.sortedData = this.unsortedClubList.slice();
  }

  sortData(sort: Sort) {
    const data = this.unsortedClubList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'sortname':
          return compare(a.clubname, b.clubname, isAsc);
        case 'sortcity':
          return compare(a.city, b.city, isAsc);
        case 'sortmanager':
          return compare(a.clubmanagers, b.clubmanagers, isAsc);
        case 'sortmembercount':
          return compare(a.clubmembercount, b.clubmembercount, isAsc);
        default:
          return 0;
      }
    });
  }

  async listClub() {
    let response = await this.api.ListClubs();
    this.allClubs =  response.items;
    for (var item of this.allClubs) {
      this.unsortedClubList.push({
        clubname: item.clubname,
        city: item.city,
        clubmanagers: item.clubmanagers,
        clubmembercount: item.clubmembers.length
      });
    }
    return this.unsortedClubList;
  }

  async getClub(clubname: string) {
    let response = await this.api.GetClub(clubname);
    this.clubname = clubname;
    this.clubmanagers = response.clubmanagers;
    this.clubmembers = response.clubmembers;
    this.contact = response.contact;
    this.street = response.street;
    this.streetnumber = response.streetnumber;
    this.city = response.city;
    this.post = response.post;
    this.country = response.country;
    this.phone = response.phone;
    this.description = response.description;
    this.kinds = response.kinds;
    this.clicked = true;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
