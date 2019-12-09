import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private islogged = new BehaviorSubject<boolean>(false);
  cast = this.islogged.asObservable();
  constructor() { }
  editlogged(val){
    this.islogged.next(val)
  }
}
