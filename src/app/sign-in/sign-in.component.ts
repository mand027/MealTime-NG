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
  confirmpassword: string;

  constructor(private rest: UserApiService) { }

  ngOnInit() {
  }

}
