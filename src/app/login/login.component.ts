import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup(
    {
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    }
  );

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  get emailField() {
    return this.form.get('Email');
  }

  get passwordField() {
    return this.form.get('Password');
  }

  ngOnInit() {
  }

  login() {
    console.log(this.form.value);
    this.authService.login(this.form.value).subscribe(response => {
      var res = response.json();
      console.log(res);
      if (!res.IsSuccess) {
        alert(res.ReturnMessage);
      } else {
        localStorage.setItem('IsLogin', 'true');
        localStorage.setItem('Id', res.Data.Id);
        localStorage.setItem('Name', res.Data.Name);
        localStorage.setItem('Email', res.Data.Email);
        localStorage.setItem('Photo', res.Data.Photo);
        localStorage.setItem('IsAdmin', res.Data.IsAdmin);

        let url = this.route.snapshot.queryParamMap.get('returnUrl');
        if (!url)
          url = '/';
        this.router.navigate([url]);
      }
    });;
  }

}
