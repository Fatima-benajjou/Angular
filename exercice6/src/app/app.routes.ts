import { Routes } from '@angular/router';


import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

export const routes: Routes = [


  {path: '', component: HomeComponent},
  
  {path: 'pokemon', component: PokemonComponent},

  {path: 'pokedex', component: PokedexComponent},

  {path: 'accueil', redirectTo:''},

  {path: '**', component: NotFoundComponent}


];

