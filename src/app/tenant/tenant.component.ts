import { Component, OnInit } from '@angular/core';
import {ForRent} from '../for-rent';
import {NgModel, NgForm} from '@angular/forms';
import {HousesService} from '../houses.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  houseForRent: ForRent = {
    name: '',
    id: 0,
    phone: 0,
    src: '',
    transaction: '',
    school: '',
    type: '',
    price: 0,
    location: '',
    description: ''
  };

  submitted: boolean = false;

  constructor(private housesService: HousesService,
              private user: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  saveHouse(form: NgForm) {
    const newHouse = form.value;
    newHouse.id = 1;
    console.log(newHouse);

    this.housesService.postHouseToDB(newHouse).subscribe(
      (data: any) => {
        console.log(data);
        if (data.name) {
          this.submitted = true;
          console.log('it is');

        } else {
          this.submitted = false;
          console.log('it is not');
        }
      },
      (err: any) => console.log(err)
    );
  }

  goToLogin() {
    this.user.isLoggedIn().subscribe(
      (res: any) => {
        console.log(res.status);
        if (res.status) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      }
    );
  }

}
