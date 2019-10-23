import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegionalSearchComponent } from './regional-search/regional-search.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';


const rutas: Routes = [
  {
    path: 'HomePage',
    component: HomePageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'LogIn',
    component: LogInComponent,
  },
  {
    path: 'SignIn',
    component: SignInComponent,
  },
  {
    path: 'NewRecipe',
    component: NewRecipeComponent,
  },
  {
    path: 'Profile',
    component: ProfilePageComponent,
  },
  {
    path: 'RegionalSearch',
    component: RegionalSearchComponent,
  },
  {
    path: 'Recipe', //add que te mande a una con un id especifico
    component: RecipePageComponent,
  },
  {
    path: 'SearchResult/:keyworld/:loggedIn', //nose si sea legal pasar dos
    component: RecipeListComponent,
  },
  {
    path: 'TopRecipes', //input desde la barra
    component: RecipeListComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    LogInComponent,
    SignInComponent,
    NewRecipeComponent,
    ProfilePageComponent,
    RegionalSearchComponent,
    RecipePreviewComponent,
    RecipePageComponent,
    RecipeListComponent
  ],
  imports: [
    RouterModule.forRoot(rutas),  //add for routes
    BrowserModule,
    FormsModule, //add forms
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  exports:[RouterModule],   //add for routes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
