import { Component } from '@angular/core';
import { ITile } from '../itile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent {
  //tiles = [];

  filterOptions: Array<string> = ["name", "model", "price"];
  selectedFilter:string = '';
  filterText:string = '';
 
  imagePath:string = "/assets/images/";
  filteredTiles:Array<ITile>;
  tiles:Array<ITile> =[
    {
     image:"tile1.jpg",
      name:"kajaria",
      model:"nit-01",
      price :200,
      rating:4,
      status:1
    },
    {
      image:"tile2.jpg",
      name:"johnson",
      model:"nit-02",
      price :100,
      rating:4,
      status:0
    },
    {
      image:"tile3.jpg",
      name:"hsil",
      model:"nit-03",
      price :300,
      rating:4,
      status:0
    },
    {
      image:"tile4.jpg",
      name:"clayhaus",
      model:"nit-04",
      price :500,          
      rating:4,
      status:1
    },
  ]
    
 
  constructor() { 
    this.filteredTiles = this.tiles;
  }

  filter(){
    console.log(this.selectedFilter);
    console.log(this.filterText);
    //fltering array
    this.filteredTiles =   this.performFiter(this.selectedFilter,this.filterText,this.tiles);
  }

  performFiter(filterOption,filterText,arrayToFilter){
    let filteredArray = arrayToFilter.filter(function(tile){
        return tile.price > +filterText
    });
    return filteredArray;
  }



 
}
