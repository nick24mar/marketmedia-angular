import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../core/services/item/item.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor(
    public itemService: ItemService
  ) { }

  ngOnInit() {
  }

}
