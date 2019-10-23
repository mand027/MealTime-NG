import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
