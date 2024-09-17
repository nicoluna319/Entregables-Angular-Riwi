import { FavoritesComponent } from './../favorites/favorites.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  characters: any[] = []
  selectedCharacter:any = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getCharacters().subscribe(data=>{
      this.characters = data.results;
      console.log(this.characters);
    })
  
  }
  
  selectCharacter(character:any):void{

    this.selectedCharacter = character;
  }

  closeDetails() {
    this.selectedCharacter = null;
  }

  @ViewChild(FavoritesComponent) favoritesComponent!: FavoritesComponent; // Referencia al componente de favoritos

  // viewDetails(character:any):void{

  //   this.selectedCharacter = character
  // }

  // closeDetails():void{
  //   this.selectedCharacter = null;
  // }

  filterCharacters(category:string):void{
    this.apiService.getCharacters().subscribe(data=>{
      if(category){
        this.characters = data.results.filter((character: any) => character.species === category || character.status === category)
      }else{
        this.characters = data.results;
      }
    })
  }

  addToFavorites(character: any) {
    this.favoritesComponent.addToFavorites(character); // Agrega el personaje a favoritos
  }


}
