import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesRoutingModule } from './tiles-routing.module';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tile/tile.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared/shared.module';
import { TileService } from './tile.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TilesComponent,TileComponent,TileDetailComponent],
  imports: [
    CommonModule,
    TilesRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[]
})
export class TilesModule { }
