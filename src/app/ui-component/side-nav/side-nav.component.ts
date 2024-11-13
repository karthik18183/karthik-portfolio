import { Component, Inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DOCUMENT } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  // Reference to the sidenav
  @ViewChild('snav', { static: true }) sidenav!: MatSidenav;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // Function to scroll to a specific section smoothly
  scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Close sidenav if in mobile mode
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }
}
