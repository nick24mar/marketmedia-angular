import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MarketComponent } from './components/market/market.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { MarketOptionsComponent } from './components/market-options/market-options.component';
import { MarketItemsComponent } from './components/market-items/market-items.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketComponent,
    NavbarComponent,
    MarketOptionsComponent,
    MarketItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
