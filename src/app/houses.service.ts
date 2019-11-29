import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private loggedInStatus;

  constructor(private http: HttpClient) { }

  housesfromDB(): Observable<any> {
    return this.http.get('/api/houses');
  }

  postHouseToDB(obj: any): Observable<any> {
    return this.http.post('/api/houses', obj);
  }

  setLogIn(val: boolean) {
    this.loggedInStatus = val;
  }

  get isLoggedIn() {
    return this.http.get('/api/isLogggedin');
  }

  getHouses(): Observable<any> {
    return this.http.get('./assets/houses.json');
  }

  homes(): Observable<any> {
    return this.http.get('/api/houses');
  }

  addUser(newUser: any): Observable<any> {
    return this.http.post('https://reqres.in/api/users', newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application.json'
      })
    });
  }

  loginUser(details: any): Observable<any> {
    return this.http.post('/api/login', details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  registerUser(formObj) {
    return this.http.post('/api/register', formObj);
  }
}
