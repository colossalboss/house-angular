import { Component, OnInit } from '@angular/core';
import {format} from 'url';
import {NgForm, NgModel} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {LoginDetails} from '../login-details';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: LoginDetails = {
    email: 'example@test.com',
    password: '12345678'
  };


  constructor() { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(`Form is valid: ${form.value}`);
      alert('valid');
    } else {
      alert('invalid');
    }
  }

  ngOnInit() {
  }

}
