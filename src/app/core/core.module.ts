import { NgModule } from '@angular/core';
import { ItemService } from './services/item/item.service';
import { CategoryService } from './services/category/category.service';

@NgModule({
  providers: [ItemService, CategoryService]
})
export class CoreModule { }
