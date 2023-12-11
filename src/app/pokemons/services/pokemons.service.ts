import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/CacheStore';
import { Pokemon } from '../interfaces/Pokemon';


@Injectable({providedIn: 'root'})
export class PokemonsService {

  //api de pokemon
  private apiUrl: string = 'https://pokeapi.co/api/v2'


  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }
  //cacheStore es un objeto que tiene 3 propiedades que son objetos
  public cacheStore: CacheStore = {
    nombre:   { term: '', pokemons: [] },
    region: { term: '', pokemons: [] },
    tipo:    { term: '', pokemons: [] },
  }
  //guardar en el local storage
  private saveToLocalStorage() {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ));
  }
  //cargar del local storage
  private loadFromLocalStorage() {
    if ( !localStorage.getItem('cacheStore') ) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }
  //obtener los pokemons
  private getPokemonsRequest(url: string):Observable<Pokemon | never[]>{
    return this.httpClient.get<Pokemon | never[]>(url).pipe(
      catchError( () =>of([]))
    );
  }

  searchPokemonByAlphaCode(code: string):Observable<Pokemon | null>{
    const url=`${this.apiUrl}/alpha/${code}`;

    return this.httpClient.get<Pokemon[]>(url)
                      .pipe(
                        map(pokemons=> pokemons.length>0?pokemons[0]:null),
                        catchError( () =>of(null) )
                      );
  }
  searchTipo(term: string):Observable<Pokemon | never[]>{
    //Esto no es una soliciutd http, es un observable
    //falta un subscribe
    const url=`${this.apiUrl}/type/${term}`;
    //El of en rxjs sirve para costruir un observable
    //basado en un valor que le pasamos
    return this.getPokemonsRequest(url)
        .pipe(
          tap( pokemons => this.cacheStore.tipo = { term, pokemons }),
          tap( () => this.saveToLocalStorage() ),
        );
  }

  searchRegion(term: string):Observable<Pokemon | never[]>{
    const url=`${this.apiUrl}/region/${term}`;

    return this.getPokemonsRequest(url)
      .pipe(
        tap( pokemons => this.cacheStore.region = { term, pokemons }),
        tap( () => this.saveToLocalStorage() ),
      );
  }

  searchNombre(term: string):Observable<Pokemon | never[]>{
    const url=`${this.apiUrl}/pokemon/${term}`;

    return this.getPokemonsRequest(url)
      .pipe(
        tap( pokemons => this.cacheStore.nombre = { term, pokemons }),
        tap( () => this.saveToLocalStorage() ),
      );
  }
}
