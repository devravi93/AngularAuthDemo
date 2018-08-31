import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class SignupService extends DataService {

  constructor(http: Http) {
    super(http)
  }

  signup(obj) {
    return this.callPostWebService('http://localhost:2557/api/Auth/Signup', obj);
  }
}
