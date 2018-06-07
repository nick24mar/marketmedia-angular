import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../core/models/item';

@Component({
  selector: 'app-market-items',
  templateUrl: './market-items.component.html',
  styleUrls: ['./market-items.component.css']
})
export class MarketItemsComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
