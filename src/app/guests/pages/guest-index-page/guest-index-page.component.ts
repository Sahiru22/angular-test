import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../guest.service';
import { Guest } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guest-index-page.component.html',
  styleUrl: './guest-index-page.component.css'
})
export class GuestIndexPageComponent implements OnInit {

  guests: Guest[] = [];

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.guestService.search().subscribe(data => this.guests = data);
  }

}
