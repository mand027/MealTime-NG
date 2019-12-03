import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/Usuario';
import {UserApiService} from '../user-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  personname: string;
  username: string;
  email: string;
  country: string;
  city: string;
  password: string;

  userModel = new Usuario;

  constructor(private rest: UserApiService) { }

  ngOnInit() {
  }


  postUserRequest(){
    this.userModel.personname = this.personname;
    this.userModel.username = this.username;
    this.userModel.email = this.email;
    this.userModel.country = this.country;
    this.userModel.city = this.city;
    this.userModel.password = this.password;

    console.log(this.userModel);

    this.rest.postUser(this.userModel).subscribe(
      (res: any) => {
        console.log('HTTP response', res);
        alert("usuario creado");
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se pudo crear el usuario');
      },
      () => console.log('HTTP request completed.')
    );
  }
  
}
