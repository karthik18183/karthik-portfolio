import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Method to scroll to a specific section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID "${sectionId}" not found.`);
    }
  }

  // Method to toggle the mobile menu
  toggleMenu(): void {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
      menuIcon.classList.toggle('active');
      navLinks.classList.toggle('active');
    } else {
      console.error('Menu icon or nav links not found.');
    }
  }
}
