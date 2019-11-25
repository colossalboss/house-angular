import { Component, OnInit } from '@angular/core';
import {HousesService} from '../houses.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any;

  constructor(private housesService: HousesService) { }

  ngOnInit(): Observable<any> {
    this.housesService.getUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.users = data;
      },
      (err: any) => console.log(err)
    );
    console.log(this.users);

    return;
  }

}
