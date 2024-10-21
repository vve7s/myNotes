import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginEndpoint = 'api/login';
  private readonly logoutEndpoint = 'api/logout';

  constructor(
    private httpService: HttpService,
  ) { }

  login(body:any): Observable<any> {
    return this.httpService.post(this.loginEndpoint, body);
  }

  logout(): Observable<any> {
    return this.httpService.post(this.logoutEndpoint, {});
  }

}
