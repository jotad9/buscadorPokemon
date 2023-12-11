import { Pokemon } from './Pokemon';
export interface CacheStore {
  nombre: TermPokemons;
  region: TermPokemons;
  tipo: TermPokemons;
}

export interface TermPokemons {
  term: string;
  pokemons: Pokemon | never[];
}
