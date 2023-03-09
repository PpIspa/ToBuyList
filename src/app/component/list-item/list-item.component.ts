import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item!: Item;
  @Output() onDelete = new EventEmitter<void>();

  deleteItem() {
    this.onDelete.emit();
  }
}
