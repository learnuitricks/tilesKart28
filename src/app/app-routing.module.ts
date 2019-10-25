import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './users/register/register.component';




const routes: Routes = [{
  path:'login',
  component:LoginComponent
},
{
  path:'tiles', pathMatch:'prefix',
  loadChildren:'./Tiles/tiles.module#TilesModule'
},
{
  path:'register',
  component:RegisterComponent
},
{
path:'welcome',
component:WelcomeComponent
},

{
  path:'',redirectTo:'register',pathMatch:'prefix'
 },
 {
  path:'**',redirectTo:'register',pathMatch:'prefix'
 }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
