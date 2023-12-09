import { Routes } from '@angular/router';
import { NombrePageComponent } from './pokemons/pages/nombre-page/nombre-page.component';
import { RegionPageComponent } from './pokemons/pages/region-page/region-page.component';
import { TipoPageComponent } from './pokemons/pages/tipo-page/tipo-page.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


export const routes: Routes = [
  {
    path:'pokemons',
    component: PokemonsComponent,
    children: [{
      path: 'nombre',
      component: NombrePageComponent
    }, {
      path: 'tipo',
      component: TipoPageComponent
    }, {
      path: 'region',
      component: RegionPageComponent
    }, {
      path: '**',
      redirectTo: 'nombre'
    }]


  }, {
    path: '**',
    redirectTo: 'pokemons'
  }
];
