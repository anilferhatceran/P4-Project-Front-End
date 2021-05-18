import { CommonResponse } from './../model/CommonResponse';
import { Users } from './../model/Users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const httpHeaders = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
ROOT_URL = 'http://localhost:46088/api/';
// loginStatus = new BehaviorSubject<boolean>(this.hasToken());
constructor(private http: HttpClient) { }

postUser(user: Users): Observable<Users>{
  return this.http.post<Users>(`${this.ROOT_URL}User`, user, httpHeaders);
}
getUser():Observable<Users[]>{
  return this.http.get<Users[]>(`${this.ROOT_URL}User`,httpHeaders);
}

}


