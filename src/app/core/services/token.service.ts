import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
  ) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  decodeToken(): any {
    const token = this.getToken();

    if (!token) {
      console.error('No token found');
      return null;
    }

    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }
}
