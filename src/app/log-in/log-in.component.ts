import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoggingServiceService} from '../logging-service.service';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers: [LoggingServiceService]
})
export class LogInComponent implements OnInit {
  username: string;
  password: string;
  public logged = false; //hay que ver como hacer esto global para cambiarlo desde login y que afecte a todo

  hardUser = "mando";
  hardPassword = "asd123";

  constructor(private router: Router, private logService: LoggingServiceService) {

   }

  ngOnInit() {
  }

  LogIn(){
    if(this.username == this.hardUser && this.password == this.hardPassword){
      this.logged = true;
      console.log("logged in!");
      this.logged = this.logService.log(this.logged);
      //this.nav.logged = this.logged;
    }
  }
}
