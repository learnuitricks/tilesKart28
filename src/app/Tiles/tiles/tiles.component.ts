import { Component, OnInit } from '@angular/core';
import { ITile } from '../itile';
import { TileService } from '../tile.service';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent  implements OnInit{
  
  //tiles = [];

  filterOptions: Array<string> = ["name", "model", "price"];
  selectedFilter:string = '';
  filterText:string = '';
 
  imagePath:string = "/assets/images/";
  filteredTiles:Array<ITile>;
  tiles:Array<ITile>;
 
  constructor(private tileService:TileService) { 
  }

  ngOnInit(): void {
     this.tileService.getTiles().subscribe((tiles)=>{
       console.log('in call back of the web api');
       this.tiles = tiles;
       this.filteredTiles = this.tiles;
     });

     console.log('am i exectuted before tiles update')

    
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
