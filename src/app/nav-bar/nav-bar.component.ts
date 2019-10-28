import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingServiceService } from '../logging-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [LoggingServiceService],

  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        height: '95%'
      })),
      state('final', style({
        height: '110%'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class NavBarComponent implements OnInit {

  currentState = 'initial';

  public lenguaje = 'es';
  public lang = true;
  public logged = false; //hay que ver como hacer esto global para cambiarlo desde login y que afecte a todo

  constructor(private translate: TranslateService, private activateRoute: ActivatedRoute, private _router: Router, private logService: LoggingServiceService) {
    this.translate.setDefaultLang(this.lenguaje);
  }

  ngOnInit() {

  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  public cambiarLenguaje(lang) {
    this.lenguaje = lang;
    this.translate.use(lang);
    if (lang == 'es') this.lang = true;
    if (lang == 'en') this.lang = false;
  }

  public logOut() {
    this.logged = false;
    this.logged = this.logService.log(this.logged);
  }

}
