import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  private getHeaders(additionalHeaders?: HttpHeaders): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (additionalHeaders) {
      additionalHeaders.keys().forEach(key => {
        headers = headers.append(key, additionalHeaders.get(key)!);
      });
    }
    return headers;
  }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.baseURL + url, { headers: this.getHeaders(headers), params });
  }

  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(this.baseURL + url, { headers: this.getHeaders(headers), params });
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(this.baseURL + url, body, { headers: this.getHeaders(headers) });
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(this.baseURL + url, body, { headers: this.getHeaders(headers) });
  }

}
