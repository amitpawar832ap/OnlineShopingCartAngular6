import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    //return this.http.post(`${config.apiUrl}/users/register`, user);
    return this.http.post(`http://localhost:4200/users/register`, user); 
  }

}
