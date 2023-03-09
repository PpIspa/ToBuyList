import { Component } from '@angular/core';
import { ToBuyService } from '../../service/to-buy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private toBuyService: ToBuyService) { }

  getItemCount() {
    // TODO: somma tutte le quantità dei prodotti
    return this.toBuyService.toBuy.length;
  }
}