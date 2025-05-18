import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl:'./dashboard.component.css'
})
export class DashboardComponent {
  users = [
    { id: 1, name: 'Alice', title: 'Software Engineer' },
    { id: 2, name: 'Bob', title: 'Product Manager' },
    { id: 3, name: 'Charlie', title: 'UX Designer' }
  ];
}
