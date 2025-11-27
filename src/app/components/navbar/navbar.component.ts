import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileMenuOpen = false;
  isLoggedIn = true; // mock state for now
  unreadMessages = 3;

  navLinks = [
    { label: 'Browse Services', path: '/browse' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'Become a Freelancer', path: '/create-service' },
  ];

  constructor(private router: Router) {}

  toggleMobile() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  go(path: string) {
    this.router.navigateByUrl(path);
    this.mobileMenuOpen = false;
  }
}
