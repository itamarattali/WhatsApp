import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://localhost:3000';

  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '');
  }

  public async Validate(username: string, password: string): Promise<void> {
    await this.http.get(`${this.BASE_URL}/users/user/${username}`).subscribe((data) => {
      this.user = data as User;
    });
  }
}
