import { Component, OnInit } from '@angular/core';
import { Receta } from '../../models/Receta';
import { Router } from '@angular/router';
import { RecetasApiService } from 'src/app/recetas-api.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  submitted = false;
  receta: Receta;

  constructor(private router: Router, private rest: RecetasApiService) {
    this.receta = new Receta();
  }

  ngOnInit() {

  }

  enviarFormulario() {
    this.submitted = true;
    console.log(this.receta);
    //this.texto = new Text();

    this.rest.postReceta(this.receta).subscribe(
      (res: any) => {
        console.log('HTTP response', res);
        alert("receta creada");
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se pudo crear la receta');
      },
      () => console.log('HTTP request completed.')
    );
  }

}
