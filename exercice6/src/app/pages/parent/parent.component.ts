import { Component } from "@angular/core";
import { PokemonCardComponent } from "../../component/pokemon-card/pokemon-card.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ PokemonCardComponent,
    FormsModule,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  pokemon = 'Bulbizarre';
  pokemons = ['Dracofeu', 'Ronflex', 'Pikachu', 'Lieviatan'];

 
  counter = 10;

  sayHi(msg: string) {
    console.log(msg)
  }

  modifyCounter(newValue: number) {
    this.counter = newValue;
  }
}