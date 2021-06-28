import { CompanyProfiles } from './../model/CompanyProfiles';
import { ReviewDetails } from './../model/ReviewDetails';
import { NameGenUsers } from './../model/NameGenUsers';
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
getMaleNamesAmount(Amount: number): Observable<string[]>{
  return this.http.get<string[]>(`${this.ROOT_URL}NameGenerated/malenames/${Amount}`, httpHeaders);
}
getFemaleNamesAmount(Amount: number): Observable<string[]>{
  return this.http.get<string[]>(`${this.ROOT_URL}NameGenerated/femalenames/${Amount}`, httpHeaders);
}
getMaleName(): Observable<string>{
  return this.http.get<string>(`${this.ROOT_URL}NameGenerated/maleName`);
}
getFemaleName(): Observable<string>{
  return this.http.get<string>(`${this.ROOT_URL}NameGenerated/femaleNames`);
}
getNames(): Observable<NameGenUsers[]>{
  return this.http.get<NameGenUsers[]>(`${this.ROOT_URL}NameGenUser`, httpHeaders);
}
getLastTenNames(userID: number): Observable<NameGenUsers[]>{
  return this.http.get<NameGenUsers[]>(`${this.ROOT_URL}NameGenUser/savednames/${userID}`, httpHeaders);
}
postName(name: NameGenUsers): Observable<NameGenUsers>{
  return this.http.post<NameGenUsers>(`${this.ROOT_URL}NameGenUser`, name, httpHeaders);
}
ValidateUser(user: Users): Observable<Users>{
  return this.http.post<Users>(`${this.ROOT_URL}User/login`, user, httpHeaders);
}
getReview(): Observable<ReviewDetails[]>{
  return this.http.get<ReviewDetails[]>(`${this.ROOT_URL}ReviewDetail`, httpHeaders);
}
getReviewByUrl(url: string): Observable<ReviewDetails[]>{      //FIND UD AF HVAD COMPANY? ER.
  return this.http.get<ReviewDetails[]>(`${this.ROOT_URL}ReviewDetail/company?url=${url}`, httpHeaders);
}
getAvrgRating(url: string): Observable<number>{      //FIND UD AF HVAD COMPANY? ER x2
  return this.http.get<number>(`${this.ROOT_URL}ReviewDetail/rating?url=${url}`, httpHeaders);
}
getTotalRatings(url: string): Observable<number>{      //FIND UD AF HVAD COMPANY? ER x2
  return this.http.get<number>(`${this.ROOT_URL}ReviewDetail/totalratings?url=${url}`, httpHeaders);
}
postReview(review: ReviewDetails): Observable<ReviewDetails>{
  return this.http.post<ReviewDetails>(`${this.ROOT_URL}ReviewDetail`, review, httpHeaders);
}
postCompany(company: CompanyProfiles): Observable<CompanyProfiles>{
  return this.http.post<CompanyProfiles>(`${this.ROOT_URL}CompanyProfile`, company, httpHeaders);
}
}


