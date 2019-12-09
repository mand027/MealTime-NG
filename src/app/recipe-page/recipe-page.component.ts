import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Receta } from '../../models/Receta';
import { RecetasApiService } from 'src/app/recetas-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  id = "00";
  sub;
  receta: Receta;
  recepi_types: any;
  safeMap: SafeResourceUrl;

  constructor(private _router: Router, private activateRoute: ActivatedRoute, private rest: RecetasApiService, private sanitizer: DomSanitizer, private translate: TranslateService) {
    this.sub = this.activateRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      
    });
   }

  async ngOnInit() {
    this.translate.get("newRecepi.recipe_types").subscribe(r => {
      this.recepi_types = r;
    });
    this.getThisReceta();
    
  }

  getThisReceta() {
    this.rest.getRecetaById(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.receta = data;
        console.log(this.receta);
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+data.video);
        this.safeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${data.remindAtGeo}&hl=es&z=14&amp;&output=embed`);
        this.receta.type = this.recepi_types[data.type];
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se encontraron eventos');
      });

  }

}
