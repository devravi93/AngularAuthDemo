import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuard } from './common/guard/auth-guard.service';
import { AdminGuard } from './common/guard/admin-guard.service';
import { AuthService } from './common/services/auth.service';
import { DataService } from './common/services/data.service';
import { SignupService } from './common/services/signup.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductComponent,
    AdminComponent,
    NotFoundComponent,
    AccessDeniedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: 'signup', component: SignupComponent },
      { path: 'access-denied', component: AccessDeniedComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [
    AuthService,
    DataService,
    SignupService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
