import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent {

  @Output() onAddNewItem = new EventEmitter<Item>();

  submit(f: NgForm) {
    this.onAddNewItem.emit(f.value);
  };






  /*
  onSubmit(f: NgForm) {

    console.log(f.value);
  }
  */



}
