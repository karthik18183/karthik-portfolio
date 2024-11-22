import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  scrollToAboutMe(): void {
    const element = document.getElementById('about-me');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
