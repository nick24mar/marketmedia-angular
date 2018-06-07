import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemFormComponent],
  exports: [ItemFormComponent]
})
export class SharedModule { }
