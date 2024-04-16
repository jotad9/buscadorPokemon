import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { PokemonTableComponent } from '../../components/pokemon-table/pokemon-table.component';
import { Result } from '../../interfaces/Pokemon';
import { PokemonsService } from '../../services/pokemons.service';
@Component({
  selector: 'app-tipo-page',
  standalone: true,
  imports: [CommonModule, PokemonTableComponent, SearchBoxComponent],
  templateUrl: './tipo-page.component.html',
  styles: ``
})
export class TipoPageComponent {
  public pokemons!: Result[] | [];
  public initialValue: string = '';
  //Donde quieras inyectar el servicio, lo tienes que declarar en el constructor
  constructor(private pokemonsService: PokemonsService) { }
  ngOnInit(): void {
    this.pokemons = this.pokemonsService.cacheStore.tipo.pokemons;
    this.initialValue = this.pokemonsService.cacheStore.tipo.term;

    console.log(this.pokemons);
  }
  searchTipo(term:string):void{
    this.pokemonsService.searchTipo(term).subscribe(pokemons => {
      this.pokemons=pokemons;
    });
  }

}
