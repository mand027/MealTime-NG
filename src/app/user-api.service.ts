import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Usuario} from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  USER_URL = 'http://[::1]:3000/users';

  currentUser = null;
  creds = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  setUser(user: Usuario){
    this.currentUser = user;
    this.creds = this.currentUser.mail + ":" + this.currentUser.pwd;
    console.log("current", this.currentUser);
  }

  public getCurrentUser(){
    return this.currentUser;
  }

  getUser():Observable<any>{
    //Make the HTTP request:
    var headers_object = new HttpHeaders();
    headers_object.append("Authorization", "Basic " + btoa(this.creds));
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get(this.USER_URL, this.httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }

  getUserById(mail : String):Observable<any>{
    return this.http.get(this.USER_URL + '/' + mail, this.httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }

  postUser(user : Usuario):Observable<any>{
    return this.http
      .post(this.USER_URL, user, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }

  patchUser(user : Usuario):Observable<any>{
    console.log(this.USER_URL+'/'+user.email);
    return this.http
      .patch(this.USER_URL + '/' + user.email, user, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }

  deleteUser(mail : String):Observable<any>{
    return this.http
      .delete(this.USER_URL + '/' + mail, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }
}
