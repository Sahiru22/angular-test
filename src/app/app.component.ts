import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotelDetailComponent } from "./hotels/components/hotel-detail/hotel-detail.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HotelDetailComponent, HeaderComponent]
})
export class AppComponent {
  title = 'apirel-pms-ng';
}
