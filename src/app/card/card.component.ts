import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [RouterModule],
  standalone: true, // ✅ Required for standalone component
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() id!: number;
}
