import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  inputInvalid: boolean = false;

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  })

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute, 
    private userService: UserService) { }

  ngOnInit(): void {
  }

  public OnSubmit(): void {
    const formUsername = this.loginForm.get('username')?.value;
    const formPassword = this.loginForm.get('password')?.value;

    this.userService.Validate(formUsername, formPassword);
    
    if (this.userService.user.GetPassword() === formPassword) {
      // User is valid
    }
    else {
      this.inputInvalid = true;
      this.loginForm.reset();
    }
  }
}
