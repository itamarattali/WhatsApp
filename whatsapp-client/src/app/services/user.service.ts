import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isValid: boolean = false;
  BASE_URL = 'http://localhost:3000';
  user: User = new User('', '');

  constructor(private http: HttpClient) { }
  
  public Validate(username: string, password: string): void {
    this.http.get(`${this.BASE_URL}/users/user/${username}/${password}`).subscribe((data) => {
      this.isValid = data as boolean;
    });
  }
}
