import { Component, OnInit } from '@angular/core';
import {ForRent} from '../for-rent';
import {NgModel, NgForm} from '@angular/forms';
import {HousesService} from '../houses.service';

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

  constructor(private housesService: HousesService) { }

  ngOnInit() {
  }

  saveHouse(form: NgForm) {
    const newHouse = form.value;
    newHouse.id = 1;
    console.log(newHouse);

    this.housesService.addUser({'name': 'Godstar', 'job': 'Developer'}).subscribe(
      (data: any) => console.log(data),
      (err: any) => console.log(err)
    )
  }

}
