import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
 

  @Input() rating:number;
  ratingArray:Array<number>=[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    for (let index = 0; index < this.rating; index++) {
      this.ratingArray.push(index);
    }
 
  }

  

}
