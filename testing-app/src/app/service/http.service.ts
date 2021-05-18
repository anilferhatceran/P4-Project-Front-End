import { Users } from './../model/Users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
ROOT_URL:string = 'http://localhost:46088/api/';
constructor(private http:HttpClient) { }

postUser(user:Users):Observable<Users>{
  return this.http.post<Users>(`${this.ROOT_URL}User`,user,httpHeaders);
}

getUser():Observable<Users[]>{
  return this.http.get<Users[]>(`${this.ROOT_URL}User`,httpHeaders);
}

}
