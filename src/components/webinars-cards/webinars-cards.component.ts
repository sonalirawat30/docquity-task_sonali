import { Component } from '@angular/core';

@Component({
  selector: 'app-webinars-cards',
  templateUrl: './webinars-cards.component.html',
  styleUrls: ['./webinars-cards.component.scss']
})
export class WebinarsCardsComponent {
  webinars = [
    {
      sponsor: 'PDGI Indonesia',
      sponsorFollowers: 2843,
      timeAgo: '30 min ago',
      isLive: false,
      image: 'assets/images/image3.png',
      credit: '1.5 Credits',
      expiration: 'Expiring in 23h 30m',
      title: 'Perspectives in The Covid19 Management of Parox health care',
      keyHighlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      reposts: 27,
      views: 750
    },
    {
      sponsor: 'PDGI Indonesia',
      sponsorFollowers: 2843,
      timeAgo: '30 min ago',
      isLive: false,
      image: 'assets/images/webinar-1 1.png',
      credit: '2 Credits',
      expiration: 'Expiring in 12 days',
      title: 'More Than Skin Deep: Treating Eczema and Allergy Diseases',
      keyHighlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      reposts: 27,
      views: 750
    },
    {
      sponsor: 'PDGI Indonesia',
      sponsorFollowers: 2843,
      timeAgo: '30 min ago',
      isLive: true,
      image: 'assets/images/220923_FKUI_APPS 2.png',
      credit: '2 Credits',
      expiration: 'Expiring in 12 days',
      title: 'New Perspectives in The Covid19 Management of Parox health caretine',
      keyHighlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      reposts: 27,
      views: 750
    },
    {
      sponsor: 'PDGI Indonesia',
      sponsorFollowers: 2843,
      timeAgo: '30 min ago',
      isLive: false,
      image: 'assets/images/image2.png',
      credit: '3 Credits',
      expiration: 'Expiring in 12 days',
      title: 'The Covid19 Management of Parox Health caretine management',
      keyHighlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      reposts: 27,
      views: 750
    }
  ];
}
