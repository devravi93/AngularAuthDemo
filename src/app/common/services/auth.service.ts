import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class AuthService extends DataService {

  constructor(http: Http) {
    super(http);
  }

  login(obj) {
    return this.callPostWebService('http://localhost:2557/api/Auth/Login', obj);
  }

  isLoggedIn() {
    let login = localStorage.getItem('IsLogin');
    if (!login)
      login = 'false';
    return JSON.parse(login);
  }

  isAdmin() {
    let admin = localStorage.getItem('IsAdmin');
    if (!admin)
      admin = 'false';
    return JSON.parse(admin);
  }
}
