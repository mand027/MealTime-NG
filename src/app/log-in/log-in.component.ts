import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoggingServiceService} from '../logging-service.service';
import {UserApiService} from '../user-api.service';
import {setlogg} from '../globals';
import {Usuario} from '../../models/Usuario';
import {UserService} from '../user.service';

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

  constructor(private rest: UserApiService, private router: Router, private logService: LoggingServiceService, private usersService:UserService) {

   }

  ngOnInit() {
    this.usersService.cast.subscribe(u => this.logged = u);
  }

  LogIn(){
      this.logged = true;
      alert("logged in!");
      this.usersService.editlogged(this.logged);
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
