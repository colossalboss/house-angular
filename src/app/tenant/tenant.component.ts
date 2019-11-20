import { Component, OnInit } from '@angular/core';
import {ForRent} from '../for-rent';
import {NgModel} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
