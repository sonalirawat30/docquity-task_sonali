import { Component } from '@angular/core';

@Component({
  selector: 'app-webinars-filters',
  templateUrl: './webinars-filters.component.html',
  styleUrls: ['./webinars-filters.component.scss']
})
export class WebinarsFiltersComponent {
filterSections = [
    { title: 'Topics', arrow: 'assets/images/down-arrow.png' },
    { title: 'Speakers', arrow: 'assets/images/down-arrow.png' },
    { title: 'Pharma & associations', arrow: 'assets/images/down-arrow.png' }
  ];
}
