import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { MarketOptionsComponent } from './components/market-options/market-options.component';
import { MarketItemsComponent } from './components/market-items/market-items.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MarketComponent,
    children: [
      { path: 'item/:id', component: ItemDetailsComponent }
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    MarketComponent,
    ItemDetailsComponent,
    MarketOptionsComponent,
    MarketItemsComponent
  ]
})
export class MarketModule { }
