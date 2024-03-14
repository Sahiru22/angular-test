import { CommonModule } from '@angular/common';
import { HotelService } from './../../hotel.service';
import { Component } from '@angular/core';
import { CardModule} from 'primeng/card';

@Component({
  selector: 'app-hotel-index-page',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './hotel-index-page.component.html',
  styleUrl: './hotel-index-page.component.css'
})
export class HotelIndexPageComponent {

  hotels$ = this.hotelService.getAll();

  constructor(private hotelService: HotelService) {
  }
}
