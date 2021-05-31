import { NamesGenerated } from './../model/Names';
import { CommonResponse } from './../model/CommonResponse';
import { Users } from './../model/Users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { TextsGenerated } from '../model/Texts';

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
getUser(): Observable<Users[]>{
  return this.http.get<Users[]>(`${this.ROOT_URL}User`, httpHeaders);
}
getWords(): Observable<TextsGenerated[]>{
  return this.http.get<TextsGenerated[]>(`${this.ROOT_URL}TextGenerator/words`, httpHeaders);
}
getWordsAmount(Amount: number): Observable<TextsGenerated>{
  return this.http.get<TextsGenerated>(`${this.ROOT_URL}TextGenerator/words/${Amount}`, httpHeaders);
}
getMaleNamesAmount(Amount: number): Observable<NamesGenerated>{
  return this.http.get<NamesGenerated>(`${this.ROOT_URL}NameGenerated/malenames/${Amount}`, httpHeaders);
}
getFemaleNamesAmount(Amount: number): Observable<NamesGenerated>{
  return this.http.get<NamesGenerated>(`${this.ROOT_URL}NameGenerated/femalenames/${Amount}`, httpHeaders);
}
getMaleName(): Observable<string>{
  return this.http.get<string>(`${this.ROOT_URL}NameGenerated/maleName`);
}
getFemaleName(): Observable<string>{
  return this.http.get<string>(`${this.ROOT_URL}NamesGenerated/femaleNames`)
}
}


