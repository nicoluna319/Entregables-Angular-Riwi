import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favoriteCharacters: any[] = []
  

  addToFavorites(character:any):void{
    if(!this.favoriteCharacters.includes(character)){
      this.favoriteCharacters.push(character)
    }
  }

}
