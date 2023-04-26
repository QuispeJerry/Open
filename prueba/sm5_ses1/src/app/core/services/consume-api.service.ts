import { HttpClient } from '@angular/common/http'; //1
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComsumeApiService {


  apiKey = '3173de333e144c829bb2d22cbb8cafd3';

  constructor(private http: HttpClient)//2
  { }

  getObtener(){
    return this.http.get(`https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${this.apiKey}`)
  }
}
