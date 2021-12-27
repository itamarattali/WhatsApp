import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://localhost:3000';
  user: User = new User('', '');

  constructor(private http: HttpClient) { }
  
  public Validate(username: string, password: string): Observable<boolean> {
    let isValid: boolean = false;
    return this.http.get<boolean>(`${this.BASE_URL}/users/user/${username}/${password}`);
  }
  
  public AddNewUser(username: string, password: string): void {
    const body = new User(username, password);
    
    this.user.username = username;
    this.user.password = password;

    this.http.post(`${this.BASE_URL}/users/add`, body);
  }
}
