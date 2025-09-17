import { Component } from '@angular/core';

@Component({
  selector: 'app-browse-by-topic',
  templateUrl: './browse-by-topic.component.html',
  styleUrls: ['./browse-by-topic.component.scss']
})
export class BrowseByTopicComponent {
 topics = [
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency', count: 5 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'Cardiologist', count: 4 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency Medicine', count: 8 }
  ];
}
