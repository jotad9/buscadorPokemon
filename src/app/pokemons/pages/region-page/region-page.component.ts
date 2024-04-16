import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { PokemonTableComponent } from '../../components/pokemon-table/pokemon-table.component';
import { Result } from '../../interfaces/Pokemon';
import { PokemonsService } from '../../services/pokemons.service';
@Component({
  selector: 'region-page',
  standalone: true,
  imports: [CommonModule, PokemonTableComponent, SearchBoxComponent],
  templateUrl: './region-page.component.html',
  styles: ``
})
export class RegionPageComponent implements OnInit{
  public pokemons!: Result[] | [];
  public initialValue: string = '';
  //Donde quieras inyectar el servicio, lo tienes que declarar en el constructor
  constructor(private pokemonsService: PokemonsService) { }
  ngOnInit(): void {
    this.pokemons = this.pokemonsService.cacheStore.region.pokemons;
    this.initialValue = this.pokemonsService.cacheStore.region.term;
  }
  searchRegion(term:string):void{
    this.pokemonsService.searchRegion(term).subscribe(pokemons => {
      this.pokemons=pokemons;
    });
  }
}
