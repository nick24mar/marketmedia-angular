import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../../core/models/item';
import { ItemService } from '../../../core/services/item/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  private itemId: number;
  item: Observable<Item>;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(uri => this.itemId = uri.id);

    this.item = this.itemService.getItemById(this.itemId);
  }

  deleteItem(): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemService.deleteItem(this.itemId)
        .subscribe(
          res => console.log(res),
          (error) => console.log(error),
          () => console.log(this.router.navigate(['/market']))
        );
    }
  }

}
