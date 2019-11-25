import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../model/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HousesService} from '../houses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterModel = new RegisterModel();

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private housesService: HousesService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  saveUser(val: any) {
    console.log(val);
    this.housesService.registerUser(val).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['dashboard']);
        }
      },
      (err: any) => console.log(err)
    );
  }

}
