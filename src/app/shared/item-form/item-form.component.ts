import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category/category.service';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../core/models/category';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
