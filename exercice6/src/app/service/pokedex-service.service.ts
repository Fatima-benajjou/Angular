import { Injectable } from '@angular/core';
import { Pokemon } from '../utils/types/pokemon.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  pokedex: Pokemon [] = [];
  counter$ = new BehaviorSubject<number>(0)
 
    addPokemon(pokemon : Pokemon) {
      
      if (!this.isPokemonInPokedex(pokemon)) {
        this.pokedex.push(pokemon)
        this.counter$.next(this.pokedex.length);

      }else {
        alert ("ce pokemon existe déja")
      }
      
    }

    deletePokemon (pokemon : Pokemon): void {
      let index = this.pokedex.indexOf(pokemon)
      this.pokedex.splice(index,1);
      this.counter$.next(this.pokedex.length)
    }


    isPokemonInPokedex(pokemon: Pokemon): boolean {
      return this.pokedex.includes(pokemon);
    }
  
}
