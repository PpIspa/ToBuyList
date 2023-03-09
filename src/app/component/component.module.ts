import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    ItemInputComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListComponent, ListItemComponent, ItemInputComponent]
})
export class ComponentModule { }
