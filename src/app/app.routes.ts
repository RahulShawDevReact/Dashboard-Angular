import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: AppComponent,
  children: [
    { path: '', component: DashboardComponent },           // ✅ shows cards
    { path: 'user-details', component: UserDetailsComponent } // ✅ shows details
  ] },
  // { path: 'user-details', component: UserDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'seller-auth', component: SellerAuthComponent },
];
