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
ROOT_URL:string = 'https://localhost:44305/api/';
constructor(private http:HttpClient) { }

}
