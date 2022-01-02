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

  public async OnSubmit(): Promise<void> {
    const formUsername = this.loginForm.get('username')?.value;
    const formPassword = this.loginForm.get('password')?.value;

    this.userService.Validate(formUsername, formPassword).subscribe((isValid: boolean) => {
      if (isValid) {
        console.log(34);
        this.userService.user.username = formUsername;
        this.userService.user.password = formPassword;
        this.router.navigate(['../chat']);
      }
      else {
        this.inputInvalid = true;
        this.loginForm.reset();
      }
    })
  }

  public SignIn() {
    this.router.navigate(['../sign-in']);
  }
}
