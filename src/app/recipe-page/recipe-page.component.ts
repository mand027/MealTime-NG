import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Receta } from '../../models/Receta';
import { RecetasApiService } from 'src/app/recetas-api.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  constructor(private _router: Router, private activateRoute: ActivatedRoute, private rest: RecetasApiService) {
    this.sub = this.activateRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
   }

  id = "00";
  sub;
  receta: Receta;

  ngOnInit() {
    
    this.getThisReceta();

  }

  getThisReceta() {
    this.rest.getRecetaById(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.receta = data;
        console.log(this.receta);
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se encontraron eventos');
      });
  }

}
