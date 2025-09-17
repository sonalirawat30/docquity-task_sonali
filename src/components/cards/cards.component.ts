import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  activeTab: any
  isMobileOrTablet: boolean = false;

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isMobileOrTablet = window.innerWidth <= 992;
  }

  onTabChanged(tab: string) {
    this.activeTab = tab;
  }

  resetTab() {
    this.activeTab = null;
  }
}