import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { PokemonTableComponent } from '../../components/pokemon-table/pokemon-table.component';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonsService } from '../../services/pokemons.service';
@Component({
  selector: 'nombre-page',
  standalone: true,
  imports: [CommonModule, PokemonTableComponent, SearchBoxComponent],
  templateUrl: './nombre-page.component.html',
  styles: ``
})

export class NombrePageComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public initialValue: string = '';
  //Donde quieras inyectar el servicio, lo tienes que declarar en el constructor
  constructor(private pokemonsService: PokemonsService) { }
  ngOnInit(): void {
    this.pokemons=this.pokemonsService.cacheStore.nombre.pokemons;
    this.pokemons = this.pokemonsService.cacheStore.nombre.pokemons;
    this.initialValue = this.pokemonsService.cacheStore.nombre.term;
  }
  searchNombre(term:string):void{
    this.pokemonsService.searchNombre(term).subscribe(pokemons => {
      this.pokemons=pokemons.results;
    });
  }
}
