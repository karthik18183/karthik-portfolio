import { Component, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'profile';

  constructor(private titleService: Title) {}

  // Section references for scrolling
  @ViewChild('homeSection', { static: false }) homeSection!: ElementRef;
  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;
  @ViewChild('experienceSection', { static: false }) experienceSection!: ElementRef;
  @ViewChild('projectsSection', { static: false }) projectsSection!: ElementRef;
  @ViewChild('contactSection', { static: false }) contactSection!: ElementRef;

  ngOnInit(): void {
    this.titleService.setTitle('SaiKarthik Sikkem | Software Engineer');
  }

  // Smooth scroll method
  scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
