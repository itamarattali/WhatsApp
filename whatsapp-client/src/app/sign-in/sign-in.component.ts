import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = this.formBuilder.group({
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
    const formUsername = this.signInForm.get('username')?.value;
    const formPassword = this.signInForm.get('password')?.value;

    this.userService.AddNewUser(formUsername, formPassword);
  }

  public LogIn() {
    this.router.navigate(['../login']);
  }
}
