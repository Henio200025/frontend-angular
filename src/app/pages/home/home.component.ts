import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery = '';

  categories = [
    { id: 1, name: 'Web Development', icon: '💻', count: 1250 },
    { id: 2, name: 'Mobile Apps', icon: '📱', count: 850 },
    { id: 3, name: 'Design & Creative', icon: '🎨', count: 2100 },
    { id: 4, name: 'Writing & Content', icon: '✍️', count: 1650 },
  ];

  featuredServices = [
    { id: 1, title: 'Professional Website Development', description: 'Full-stack web development with modern technologies', price: 2500, deliveryTime: '7 days', category: 'Web Development', freelancer: { name: 'Sarah Johnson', avatar: 'SJ', rating: 4.9, reviews: 127 } },
    { id: 2, title: 'Mobile App UI/UX Design', description: 'Beautiful and intuitive mobile app designs', price: 1800, deliveryTime: '5 days', category: 'Design & Creative', freelancer: { name: 'Michael Chen', avatar: 'MC', rating: 5.0, reviews: 89 } },
  ];

  constructor(public router: Router) {}

  onSearch(e: Event) {
    e.preventDefault();
    this.router.navigateByUrl(`/browse?q=${encodeURIComponent(this.searchQuery)}`);
  }
}
