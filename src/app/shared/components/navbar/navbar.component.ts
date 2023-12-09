import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            RouterLink],
  templateUrl: './navbar.component.html',
  styles: `#tituloNav{
    margin-right: 20%;
  }
  a{
    font-size: 140%;
  }
  `
})
export class NavbarComponent {

}
