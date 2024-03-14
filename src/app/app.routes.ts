import { Routes } from '@angular/router';
import { HotelIndexPageComponent } from './hotels/pages/hotel-index-page/hotel-index-page.component';
import { GuestIndexPageComponent } from './guests/pages/guest-index-page/guest-index-page.component';

export const routes: Routes = [
    {path: 'hotels', component: HotelIndexPageComponent},
    {path: 'guests', component: GuestIndexPageComponent}
];
