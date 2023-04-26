import { Injectable } from '@angular/core';

//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoctelService {

  apiKey = '3173de333e144c829bb2d22cbb8cafd3';
  constructor(private http:HttpClient) { }

  getCockteles(){
    //return this.http.get(`https://thecocktaildb.com/api/json/v1/1/search.php?f=a`)
    return this.http.get(`http://localhost:3000/drinks`)
    //https://thecocktaildb.com/api/json/v1/1/search.php?f=a
    //https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${this.apiKey}
    
  }
}
