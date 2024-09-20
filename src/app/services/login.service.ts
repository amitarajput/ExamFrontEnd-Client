import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private platformId: Object;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public getCurrentUser() {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/current-user`, { headers });
  }

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  public loginUser(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
    return true;
  }

  public isLoggedIn() {
    const token = this.getToken();
    return !!token; // Returns true if token exists and is not empty
  }

  public logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
      localStorage.removeItem('user'); // Optionally clear user details
    }
    return true;
  }

  public getToken() {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  public setUser(user: any) {
    if (this.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  public getUser() {
    const userStr = this.isBrowser() ? localStorage.getItem('user') : null;
    return userStr ? JSON.parse(userStr) : null;
  }

  public getUserRole() {
    const user = this.getUser();
    return user ? user.authorities[0].authority : null; // Ensure user exists before accessing
  }
}
