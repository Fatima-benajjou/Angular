import { Component } from '@angular/core';
import { PokedexServiceService } from '../../service/pokedex-service.service';
import { Pokemon } from '../../utils/types/pokemon.type';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  pokedex : Pokemon []=[];

  constructor(private pokedexService : PokedexServiceService) {

    this.pokedex=pokedexService.pokedex
  }

  deletePokemon (pokemon : Pokemon) {
    this.pokedexService.deletePokemon(pokemon);
  }

  

}
