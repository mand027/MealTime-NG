import { Component, OnInit } from '@angular/core';
import { Receta } from '../../models/Receta';
import { Router } from '@angular/router';
import { RecetasApiService } from 'src/app/recetas-api.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  submitted = false;
  receta: Receta;
  recepi_type = [];
  translations: any;

  constructor(private router: Router, private rest: RecetasApiService,private translate: TranslateService) {
    this.receta = new Receta();
  }

  ngOnInit() {
    this.translate.get("newRecepi.recipe_types").subscribe(res => {
      this.translations = res;
      for(let type in res){
        this.recepi_type.push(res[type]);
      }
    });
  }
  getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }
  enviarFormulario() {
    this.submitted = true;
    for(let type in this.translations){
      if (this.translations[type] === this.receta.type){
        this.receta.type = type;
        break;
      }
    }
    this.receta.video = this.getId(this.receta.video);
    console.log(this.receta);
    //this.texto = new Text();

    this.rest.postReceta(this.receta).subscribe(
      (res: any) => {
        console.log('HTTP response', res);
        alert("receta creada");
        this.router.navigate(['../HomePage']);
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se pudo crear la receta');
      },
      () => console.log('HTTP request completed.')
    );
  }

}
