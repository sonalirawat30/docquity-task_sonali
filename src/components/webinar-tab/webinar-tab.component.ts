import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-webinar-tab',
  templateUrl: './webinar-tab.component.html',
  styleUrls: ['./webinar-tab.component.scss']
})
export class WebinarTabComponent {
  activeTab: string = 'forYou';
  @Output() tabChanged = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.tabChanged.emit(this.activeTab);
    });
  }

  setActive(tab: string) {
    this.activeTab = tab;
    this.tabChanged.emit(tab);
  }
}
