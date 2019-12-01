import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Receta} from '../models/Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasApiService {
  RECETA_URL = 'http://127.0.0.1:3000/usuarios';  //cambiar por nuestra direccion de LB4

  currentReceta = null;
  creds = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  setReceta(receta: Receta){
    this.currentReceta = receta;
    this.creds = this.currentReceta.mail + ":" + this.currentReceta.pwd;
    console.log("current", this.currentReceta);
  }

  public getCurrentReceta(){
    return this.currentReceta;
  }

  getReceta():Observable<any>{
    //Make the HTTP request:
    var headers_object = new HttpHeaders();
    headers_object.append("Authorization", "Basic " + btoa(this.creds));
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get(this.RECETA_URL, this.httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }

  getRecetaById(id : String):Observable<any>{
    return this.http.get(this.RECETA_URL + '/' + id, this.httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }

  postReceta(receta : Receta):Observable<any>{
    return this.http
      .post(this.RECETA_URL, receta, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }

  patchReceta(receta : Receta):Observable<any>{
    console.log(this.RECETA_URL+'/'+receta.id);
    return this.http
      .patch(this.RECETA_URL + '/' + receta.id, receta, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }

  deleteReceta(id : String):Observable<any>{
    return this.http
      .delete(this.RECETA_URL + '/' + id, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }
}
