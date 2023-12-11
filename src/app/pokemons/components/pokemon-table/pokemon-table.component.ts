import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../../interfaces/Pokemon';
@Component({
  selector: 'pokemon-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-table.component.html',
  styles: ``
})
export class PokemonTableComponent {

  @Input () public pokemons: Pokemon[] = [];
}
