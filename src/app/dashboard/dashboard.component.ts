import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {HousesService} from '../houses.service';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any;
  name;
  email;

  constructor(private housesService: HousesService,
              private user: UserService,
              private router: Router) { }

  ngOnInit() {
    this.housesService.homes().subscribe(
      (data: any) => {
        console.log(data);
        this.users = data;
      },
      (err: any) => console.log(err)
    );
    console.log(this.users);

    return;
  }

  checkLogin() {
    this.user.isLoggedIn().subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  }
}
