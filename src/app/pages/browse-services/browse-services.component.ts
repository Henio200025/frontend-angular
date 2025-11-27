import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <h1>Browse Services</h1>
      <!-- Add your browse services content here -->
    </div>
  `,
  styles: []
})
export class BrowseServicesComponent {}