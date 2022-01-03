import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
