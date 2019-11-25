import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  setLogIn(val: boolean) {
    this.loggedInStatus = val;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getHouses(): Observable<any> {
    return this.http.get('./assets/houses.json');
  }

  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  addUser(newUser: any): Observable<any> {
    return this.http.post('https://reqres.in/api/users', newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application.json'
      })
    });
  }

  loginUser(details: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  registerUser(formObj) {
    return this.http.post('/api/register', formObj);
  }
}
