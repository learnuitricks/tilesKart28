import { Component } from '@angular/core';
import { ITile } from '../itile';
import { TileService } from '../tile.service';


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
  tiles:Array<ITile>;
 
  constructor(private tileService:TileService) { 
    //tileService = new TileService();
    this.tiles = this.tileService.getTiles();
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
