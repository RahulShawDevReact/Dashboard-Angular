import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngFor, *ngIf, etc.
@Component({
  selector: 'app-root',
  standalone: true, // ✅ Ensure this is marked standalone
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard';
  // users = [
  //   { id: 1, name: 'Alice', title: 'Software Engineer' },
  //   { id: 2, name: 'Bob', title: 'Product Manager' },
  //   { id: 3, name: 'Charlie', title: 'UX Designer' }
  // ];
  
}
