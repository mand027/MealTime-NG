import { Component, OnInit } from '@angular/core';
import { Receta } from '../../models/Receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss']
})
export class RecipePreviewComponent implements OnInit {

  receta: Receta;

  constructor(private router: Router) {
    this.receta = new Receta();
  }

  ngOnInit() {

  }
}
