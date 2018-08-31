import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../common/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
  }

  get nameField() {
    return this.form.get('Name');
  }

  get emailField() {
    return this.form.get('Email');
  }

  get passwordField() {
    return this.form.get('Password');
  }

  signup() {
    this.signupService.signup(this.form.value).subscribe(respone => {
      let res = respone.json();
      if (!res.IsSuccess) {
        alert(res.ReturnMessage);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
