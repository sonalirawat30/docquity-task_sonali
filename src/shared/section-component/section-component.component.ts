import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-component',
  templateUrl: './section-component.component.html',
  styleUrls: ['./section-component.component.scss']
})
export class SectionComponentComponent {
  @Input() title: string = '';
  @Input() viewAllLink: string = '#';
  @Input() viewAllText: string = 'View all';
}
