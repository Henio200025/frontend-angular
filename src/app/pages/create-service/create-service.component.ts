import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <h1>Create Service</h1>
      <!-- Add your create service content here -->
    </div>
  `,
  styles: []
})
export class CreateServiceComponent {}