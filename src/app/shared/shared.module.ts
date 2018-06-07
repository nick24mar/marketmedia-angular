import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ItemFormComponent],
  exports: [ItemFormComponent]
})
export class SharedModule { }
