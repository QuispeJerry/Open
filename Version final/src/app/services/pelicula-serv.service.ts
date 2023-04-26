import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServService {

  constructor( private _http:HttpClient ) { }

  agregarPelicula(data: any) : Observable<any>{
    return this._http.post('http://localhost:3000/peliculas', data);
  }


   ActualizarPelicula(id: number,data: any) : Observable<any>{
     return this._http.put(`http://localhost:3000/peliculas/${id}`, data);
   }
  
 
  get_listaPeliculas() : Observable<any>{
    return this._http.get('http://localhost:3000/peliculas');
  }


  eliminarPelicula(id: number): Observable<any>{
  
    return this._http.delete(`http://localhost:3000/peliculas/${id}`);
  }

}
