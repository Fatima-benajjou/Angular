import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { Pokemon } from '../../utils/types/pokemon.type';
import { PokemonCardComponent } from '../../component/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [ FormsModule,
    ReactiveFormsModule, 
    PokemonCardComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})

// form reactive //


export class PokemonComponent {

  pokemon_control = new FormGroup ({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    types: new FormArray ([
      new FormControl("")
    ]),
    attacks: new FormArray ([
      new FormGroup ({
        name: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
        damage: new FormControl(0, Validators.required)

        })
      ]),
      
      zone: new FormGroup ({
        name: new FormControl("", Validators.required),
        region: new FormControl("", Validators.required)
  })

})


pokemons : Pokemon[] = [];


// pokemon: FormGroup;

// constructor(private fb: FormBuilder) {
//   this.pokemon = this.fb.group({
//     name: ['', Validators.required],
//     description: ['', Validators.required],
//     types: this.fb.array([], Validators.required),
//     attacks: this.fb.array([this.createAttackGroup()]),
//     zone: this.fb.group({
//       name: ['', Validators.required],
//       region: ['', Validators.required]
//     })
//   });
// }

constructor() {
   
    const stored = localStorage.getItem('pokemons');
    if(stored) {
      this.pokemons = JSON.parse(stored)
    
  }
}



  get types(): FormArray {
    return this.pokemon_control.get('types') as FormArray;
  }

  get attacks(): FormArray {
    return this.pokemon_control.get('attacks') as FormArray;
  }

  addType(type: string) {
    this.types.push(
       new FormControl(''),
   )
  }


  addAttack() {
    this.attacks.push(new FormGroup({
      name: new FormControl(''),
      power: new FormControl(0),
    }))
  }
  removeAttack(index: number): void {
    this.attacks.removeAt(index);
  }

  onSubmit(): void {
    if (this.pokemon_control.valid) {
      console.log(this.pokemon_control.value);
      this.pokemons.push(this.pokemon_control.value as Pokemon)
      localStorage.setItem('pokemons', JSON.stringify(this.pokemons))
      this.pokemon_control.reset()    
    
    }
  }

  deletePokemon(pokemon : Pokemon) {
    const i = this.pokemons.indexOf(pokemon);
    this.pokemons.splice(i,1);
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
  }


}
