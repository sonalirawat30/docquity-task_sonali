import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-webinars',
  templateUrl: './upcoming-webinars.component.html',
  styleUrls: ['./upcoming-webinars.component.scss']
})
export class UpcomingWebinarsComponent {
  webinars = [
    {
      imageUrl: 'assets/images/webinar banner-07 2.png',
      credits: '1.5 Credits',
      expiration: 'Expiring in 23h 30m',
      title: 'The Covid19 Management of Parox Health caretine',
      orgLogoUrl: 'assets/images/image 171.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Manage chronic and complex diseases',
      liveDate: '7 Jan 2025, 12:30 PM',
      guideline:'KEY HIGHLIGHTS',
      showNotify: true
    },
    {
      imageUrl: 'assets/images/220923_FKUI_APPS 2.png',
      credits: '1.5 Credits',
      title: 'Perspectives in the Covid19 Management of Parox Health',
      orgLogoUrl: 'assets/images/image 171.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Manage chronic and complex diseases',
      liveDate: '7 Jan 2025, 12:30 PM',
      guideline:'KEY HIGHLIGHTS',
      showNotify: true
    },
    {
      imageUrl: 'assets/images/220923_FKUI_APPS 2.png',
      credits: '1.5 Credits',
      title: 'Perspectives in the Covid19 Management of Parox Health',
      orgLogoUrl: 'assets/images/image 171.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Manage chronic and complex diseases',
      liveDate: '7 Jan 2025, 12:30 PM',
      guideline:'KEY HIGHLIGHTS',
      showNotify: true
    },
    {
      imageUrl: 'assets/images/image2.png',
      credits: '2 Credits',
      title: 'The Covid19 Management of Parox Health caretine',
      orgLogoUrl: 'assets/images/image 171.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Manage chronic and complex diseases',
      liveDate: '7 Jan 2025, 12:30 PM',
      guideline:'KEY HIGHLIGHTS',
      showNotify: true
    }
  ];
}
