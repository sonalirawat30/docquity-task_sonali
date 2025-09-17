import { Component } from '@angular/core';

@Component({
  selector: 'app-continue-watching',
  templateUrl: './continue-watching.component.html',
  styleUrls: ['./continue-watching.component.scss']
})
export class ContinueWatchingComponent {

   webinars = [
    {
      imageUrl: 'assets/images/webinar-1 1.png',
      duration: '24:50',
      title: 'New Perspectives in The Covid19 Management',
      organization: 'by Pifizer Indo...',
      timeLeft: '10 min left',
      watchedPercent: 20
    },
    {
      imageUrl: 'assets/images/webinar-1 1.png',
      duration: '24:50',
      title: 'New Perspectives in The Covid19 Management',
      organization: 'by Pifizer Indo...',
      timeLeft: '10 min left',
      watchedPercent: 30
    },
    {
      imageUrl: 'assets/images/webinar-1 1.png',
      duration: '24:50',
      title: 'New Perspectives in The 12',
      organization: 'by Bayer',
      timeLeft: '10 min left',
      watchedPercent: 30
    },
    {
      imageUrl: 'assets/images/webinar-1 1.png',
      duration: '24:50',
      title: 'New Perspectives in The 12',
      organization: 'by Bayer',
      timeLeft: '10 min left',
      watchedPercent: 30
    }
  ];
}
