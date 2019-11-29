import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/api/data');
  }

  isLoggedIn() {
    return this.http.get('/api/isLoggedin');
  }

  logout() {
    return this.http.get('/api/logout');
  }
}
