import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../core/services/item/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => console.log(items));
  }

}
