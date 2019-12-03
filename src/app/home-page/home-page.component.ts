import { Component, OnInit } from '@angular/core';
import { Receta } from '../../models/Receta';
import { RecetasApiService } from 'src/app/recetas-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  recetas:Receta[];
  random:number;
  count;
  rand:number;
  constructor(private rest: RecetasApiService) { }

  ngOnInit() {
    this.getEvents();
    this.getCount();
  }

  getEvents(){
    this.rest.getReceta().subscribe(
    (data: any) => {
      console.log(data);
      this.recetas=data;
    },
    (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se encontraron eventos');
   });
  }

  getCount(){
    this.rest.countRecetas().subscribe(
      (data: any) => {
        console.log(data);
        this.count=data;
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se conto');
   });
  }

  randomRecipe(){
    this.rand = Math.floor(Math.random() * (this.count.count)-1 ) + 1 ;
    console.log(this.rand)
    this.random = this.recetas[this.rand].id;
    console.log(this.random);
  }

}
