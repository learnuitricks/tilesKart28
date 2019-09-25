import { Injectable } from '@angular/core';
import { ITile } from './itile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileService {


  tilesAPIURL:string = "http://demo5911200.mockable.io/tiles";
  constructor(private httpClient:HttpClient) { }
  getTiles():Observable<Array<ITile>>{
   return this.httpClient.get<Array<ITile>>(this.tilesAPIURL);
    // talk to back end to get the data
  }
}
