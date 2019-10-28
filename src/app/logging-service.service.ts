import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {
  public logedS = false;

  constructor() { }

  public log(loged: boolean){
    this.logedS = loged;
    console.log('did a thing' + this.logedS);
    return this.logedS;
  }
  public getLog(){
    return this.logedS;
  }
}
