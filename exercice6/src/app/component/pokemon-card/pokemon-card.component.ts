import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Pokemon } from '../../utils/types/pokemon.type';
import { PokedexServiceService } from '../../service/pokedex-service.service';


@Component({
  selector: 'app-pokemon-card[pokemon]',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent  {

  pokemons : Pokemon[] = [];

  constructor(private pokedexService : PokedexServiceService) {}
  



  @Input() pokemon!: Pokemon;
  @Output() deleteEvent = new EventEmitter<Pokemon>();


  addPokemon(): void {
    this.pokedexService.addPokemon(this.pokemon);
  }
  deletePokemon () {
    this.deleteEvent.emit(this.pokemon);

  }

}