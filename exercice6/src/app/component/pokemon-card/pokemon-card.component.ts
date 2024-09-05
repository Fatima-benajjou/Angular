import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Pokemon } from '../../utils/types/pokemon.type';


@Component({
  selector: 'app-pokemon-card[pokemon]',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;
  @Output() deleteEvent = new EventEmitter<Pokemon>();

  deletePokemon () {
    this.deleteEvent.emit(this.pokemon);

  }

}