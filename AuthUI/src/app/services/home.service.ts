import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private userProfileUrl = environment.baseUrl + '/api/v1/username';
  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get(this.userProfileUrl);
  }
}
