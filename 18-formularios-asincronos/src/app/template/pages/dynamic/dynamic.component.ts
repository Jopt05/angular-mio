import { Component } from '@angular/core';
import { Favorites, Person } from './dynamic.interface';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  public person: Person = {
    name: 'David Ferrer',
    favorites: [
      { id: 1, name: 'Batman' },
      { id: 2, name: 'Spider-Man' }
    ]
  }
  public newGame: string = "";

  addGame() {
    const newFavorite: Favorites = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    };

    this.person.favorites.push({...newFavorite});
    this.newGame = '';
  }

  save() {
    console.log(this.person);
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1)
  }
}
