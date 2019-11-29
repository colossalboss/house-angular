import { Component, OnInit, Input } from '@angular/core';
import { HousesService } from '../houses.service';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() event: any;

  availables: any;

  constructor(private houses: HousesService,
              public router: Router,
              private user: UserService) { }

  ngOnInit() {
    this.houses.getHouses().subscribe(homes => {
      this.availables = homes;
    });
  }

  onSelect(house) {
    this.router.navigate(['/houses', house.id]);
  }

  goToLogin() {
    this.user.isLoggedIn().subscribe(
      (res: any) => {
        if (res.status) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      }
    );
  }

  findAHouse() {
    this.user.isLoggedIn().subscribe(
      (res: any) => {
        if (res.status) {
          this.router.navigate(['tenant']);
        } else {
          this.router.navigate(['login']);
        }
      }
    );
  }

}
