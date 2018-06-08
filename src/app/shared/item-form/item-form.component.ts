import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../core/services/category/category.service';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../core/models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveItem } from '../../core/models/save-item';
import { ItemService } from '../../core/services/item/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  categories: Observable<Category[]>;
  itemForm: FormGroup;
  @Input() itemId: number;

  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();

    this.formInit();
  }

  clear() {
    this.itemForm.reset();
  }

  onSubmit(): void {
    const item: SaveItem = this.itemForm.value;

    if (this.itemId === 0) {
      this.itemService.addNewItem(item);
    } else {
      console.log('new item: ');
      console.log(item);
    }

    this.clear();
  }

  private formInit(): void {

    if (this.itemId > 0) {
      this.itemService.getItemById(this.itemId)
        .subscribe(item => this.itemForm.setValue({
          name: item.name,
          price: item.price,
          categoryId: 3
        }));
    }

    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

}
