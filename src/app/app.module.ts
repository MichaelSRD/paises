import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { FiltroComponent } from './main/filtro/filtro.component';
import { HttpClientModule } from "@angular/common/http";
import { BanderasComponent } from './main/banderas/banderas.component';
import { DetailComponent } from './main/detail/detail.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    SearchComponent,
    FiltroComponent,
    BanderasComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
