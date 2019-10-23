import { Component, OnInit } from '@angular/core';
import { Receta } from '../../models/Receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  submitted = false;
  receta: Receta;

  constructor(private router: Router) {
    this.receta = new Receta();
  }

  ngOnInit() {

  }

  enviarFormulario(){
    this.submitted = true;
    console.log(this.receta);
    //this.texto = new Text();
  }
}
