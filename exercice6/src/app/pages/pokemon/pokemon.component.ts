import { Component } from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [ FormsModule,
    ReactiveFormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})

// form reactive //


export class PokemonComponent {
  pokemon: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pokemon = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      types: this.fb.array([], Validators.required),
      attacks: this.fb.array([this.createAttackGroup()]),
      zone: this.fb.group({
        name: ['', Validators.required],
        region: ['', Validators.required]
      })
    });
  }

//   pokemon_control = new FormGroup ({
//     name: new FormControl('', Validators.required),
//     description: new FormControl('', Validators.required),
//     types: new FormArray ([
//       new FormControl("")
//     ]),
//     attacks: new FormArray ([
//       new FormGroup ({
//         name: new FormControl("", Validators.required),
//         description: new FormControl("", Validators.required),
//         damage: new FormControl(0, Validators.required)

//         })
//       ]),
      
//       zone: new FormGroup ({
//         name: new FormControl("", Validators.required),
//         region: new FormControl("", Validators.required)
//   })

// })



  createAttackGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      damage: ['', Validators.required]
    });
  }

  get types(): FormArray {
    return this.pokemon.get('types') as FormArray;
  }

  get attacks(): FormArray {
    return this.pokemon.get('attacks') as FormArray;
  }

  addType(type: string): void {
    this.types.push(this.fb.control(type));
  }

  addAttack(): void {
    this.attacks.push(this.createAttackGroup());
  }

  removeAttack(index: number): void {
    this.attacks.removeAt(index);
  }

  onSubmit(): void {
    if (this.pokemon.valid) {
      console.log(this.pokemon.value);
      this.pokemon.reset()
    
    }
  }
}
