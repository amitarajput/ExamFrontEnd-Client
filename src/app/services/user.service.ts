import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//inject dependency
  constructor(private http:HttpClient)
  

   { }

  //add user

  public addUser(user:any)
  {
    //call backend from http
    return this.http.post(`${baseUrl}/user/`, user);

  }
}
