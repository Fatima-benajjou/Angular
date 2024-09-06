import { Injectable } from '@angular/core';
import { Pokemon } from '../utils/types/pokemon.type';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  pokedex: Pokemon [] = [];
 
    addPokemon(pokemon : Pokemon) {
      
      if (!this.isPokemonInPokedex(pokemon)) {
        this.pokedex.push(pokemon);
      }
      
    }

    deletePokemon (pokemon : Pokemon): void {
      let index = this.pokedex.indexOf(pokemon)
      this.pokedex.splice(index,1);
    }


    isPokemonInPokedex(pokemon: Pokemon): boolean {
      return this.pokedex.includes(pokemon);
    }
  
}
