import {TranslateService} from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public lenguaje = 'es';
  public lang = true;
  public logged = false; //hay que ver como hacer esto global para cambiarlo desde login y que afecte a todo

  constructor(private translate: TranslateService, private activateRoute: ActivatedRoute, private _router: Router) {
    this.translate.setDefaultLang(this.lenguaje);
 }

ngOnInit() {
  
}

public cambiarLenguaje(lang) {
  this.lenguaje = lang;
  this.translate.use(lang);
  if(lang == 'es') this.lang = true;
  if(lang == 'en') this.lang = false;
}

public logOut(){
  this.logged = false;
}

}
