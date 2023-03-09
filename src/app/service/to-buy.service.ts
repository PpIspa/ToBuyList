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
    // TODO: if quantity is 0 remove item from list
  }

  getTotalNumberOfProduct(): number {
    let totalProduct = 0;
    for (let i = 0; i < this.toBuy.length; i++) {
      totalProduct += +this.toBuy[i].quantity;
    }
    console.log(totalProduct);
    return totalProduct;
  }
}