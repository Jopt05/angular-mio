import { Component } from '@angular/core';
import { MenuItem } from './MenuItem.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public authMenu: MenuItem[] = [
    { text: 'Login', path: './auth/login' },
    { text: 'Register', path: './auth/register' }
  ]

  public templateMenu: MenuItem[] = [
    { text: 'Básicos', path: './template/basics' },
    { text: 'Dinámicos', path: './template/dynamic' },
    { text: 'Switches', path: './template/switches' }
  ]

  public reactiveMenu: MenuItem[] = [
      { text: 'Básicos', path: './reactive/basics' },
      { text: 'Dinámicos', path: './reactive/dynamic' },
      { text: 'Switches', path: './reactive/switches' }
  ]
}
