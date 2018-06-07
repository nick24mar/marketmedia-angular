import { Item } from './../../core/models/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../core/services/item/item.service';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../../core/services/category/category.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
