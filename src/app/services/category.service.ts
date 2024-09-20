import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  //load all the categories

  public categories()
  {
    return this._http.get(`${baseUrl}/category/`);
  }

  //add new category

public addCategory(category: any) {
  const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
  return this._http.post(`${baseUrl}/category/`, category, { headers });
}
}
