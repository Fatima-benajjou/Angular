import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokedexServiceService } from '../../service/pokedex-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  counter = 0;

  constructor (private pokedexService : PokedexServiceService) {}

  ngOnInit() {
    this.pokedexService.counter$.subscribe({
      next: (value) => this.counter = value,
    })
  }

 


}
