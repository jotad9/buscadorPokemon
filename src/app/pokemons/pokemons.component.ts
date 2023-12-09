import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NombrePageComponent } from './pages/nombre-page/nombre-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { TipoPageComponent } from './pages/tipo-page/tipo-page.component';


@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            NombrePageComponent,
            TipoPageComponent,
            RegionPageComponent,
            HttpClientModule],
  templateUrl: './pokemons.component.html',
  styles: ``
})
export class PokemonsComponent {

}
