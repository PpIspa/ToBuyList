import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToBuyService {
  toBuy: Item[] = [];

  addItem(item: Item) {
    this.toBuy.push(item);
  }

  removeItem(index: number) {
    this.toBuy = this.toBuy.filter((item, i) => i != index);
  }

  changeQuantity(index: number, quantity: number) {
    this.toBuy[index].quantity = quantity;
    //TODO : check if number is 0 
  }
}