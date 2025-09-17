import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {
  @Input() webinar: any;
  @Input() type: 'live' | 'upcoming' | 'default'  = 'live';
}
