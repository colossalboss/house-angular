import { Component, OnInit } from '@angular/core';
import {format} from 'url';
import {NgForm, NgModel} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {LoginDetails} from '../login-details';
import {HousesService} from '../houses.service';
import {Router} from '@angular/router';

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


  constructor(private housesService: HousesService,
              private router: Router) { }

  onSubmit(form: NgForm): void {
    // alert('hi');
    if (form.valid) {
      console.log('valid form');
      this.housesService.loginUser(form.value).subscribe(
        (data: any) => {
          if (data.success) {
            this.housesService.setLogIn(true);
            this.router.navigate(['dashboard']);
          } else {
            console.log('not a user');
            alert(data.error);
          }
        },
        (err: any) => console.log(err)
      );
    } else {
      alert('invalid form value');
    }
  }

  ngOnInit() {
    // this.housesService.getUsers().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   }
    // );
  }



}
