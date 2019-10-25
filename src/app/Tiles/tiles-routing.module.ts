import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';


const routes: Routes = [
  {
    path:'', component:TilesComponent
  },
  {
    path:':Id',component:TileDetailComponent
  },
  {
    path:'**', redirectTo:'tiles'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TilesRoutingModule { }
