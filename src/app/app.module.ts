import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './Tiles/tiles/tiles.component';
import { LoginComponent } from './users/login/login.component';
import { StatusPipe } from './Shared/status.pipe';
import { TileComponent } from './Tiles/tile/tile.component';
import { StarComponent } from './Shared/star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './Tiles/tile-detail/tile-detail.component';
import { RegisterComponent } from './users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    TileComponent,
    StarComponent,
    WelcomeComponent,
    TileDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
