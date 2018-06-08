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
import { SharedModule } from './shared/shared.module';
import { ItemDetailsComponent } from './components/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketComponent,
    NavbarComponent,
    MarketOptionsComponent,
    MarketItemsComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
