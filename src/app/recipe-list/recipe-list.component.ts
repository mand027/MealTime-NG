import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Receta } from '../../models/Receta';
import { RecetasApiService } from 'src/app/recetas-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recetas:Receta[];

  constructor(private _router: Router, private activateRoute: ActivatedRoute, private rest: RecetasApiService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(){
    this.rest.getReceta().subscribe(
    (data: any) => {
      console.log(data);
      this.recetas=data;
      console.log(this.recetas);
    },
    (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se encontraron eventos');
   });
  }

}
