import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileService } from '../tile.service';
import { ITile } from '../itile';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css'],
  providers:[TileService]
})
export class TileDetailComponent implements OnInit {

  tile:ITile;
  imagePath:string = "/assets/images/"
  constructor(private activatedRoute:ActivatedRoute, private tileService: TileService) { }

  ngOnInit() {

    let tileId = +this.activatedRoute.snapshot.paramMap.get("Id");
    console.log(tileId);
    // call the back end get the details for the selected tile id.
    this.tileService.getTile(tileId).subscribe((tile)=>{
      this.tile = tile;
      console.log(this.tile);
    })

    // access the router parameter
  }

  navigateBack(){
    console.log('route back')
  }

}
