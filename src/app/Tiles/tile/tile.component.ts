import { Component, OnInit, Input } from '@angular/core';
import { ITile } from '../itile';

@Component({
  selector: '[app-tile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input()  tile:ITile;
  imagePath:string = "/assets/images/";
  constructor() { }

  ngOnInit() {
  }

}
