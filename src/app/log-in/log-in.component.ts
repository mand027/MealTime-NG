import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoggingServiceService} from '../logging-service.service';
import {UserApiService} from '../user-api.service';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {Usuario} from '../../models/Usuario';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers: [LoggingServiceService]
})
export class LogInComponent implements OnInit {
  mail: string;
  password: string;
  public logged = false; //hay que ver como hacer esto global para cambiarlo desde login y que afecte a todo

  hardUser = "mando";
  hardPassword = "asd123";

  userModel = new Usuario;

  constructor(private rest: UserApiService, private router: Router, private logService: LoggingServiceService) {

   }

  ngOnInit() {
  }

  LogIn(){
      this.logged = true;
      alert("logged in!");
      this.logged = this.logService.log(this.logged);
      
  }

  searchUserRequest(){
    this.rest.getUserById(this.mail).subscribe(
    (data: any) => {
      this.rest.setUser(data);
      console.log(data);
      if(this.password === data.password){
        this.LogIn();
      } else{
        alert('El usuario o la contraseña son incorrectos');
      }
    },
    (err: any) => {
      console.log('HTTP Error', err, err.status);
      alert('El usuario o la contraseña son incorrectos');
   });

  }

}
