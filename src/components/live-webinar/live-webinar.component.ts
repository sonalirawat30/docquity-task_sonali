import { Component } from '@angular/core';

@Component({
  selector: 'app-live-webinar',
  templateUrl: './live-webinar.component.html',
  styleUrls: ['./live-webinar.component.scss']
})
export class LiveWebinarComponent {

  webinars = [
    {
      imageUrl: 'assets/images/Group 1171283755.png',
      viewers: '200+',
      duration: '24:50',
      credits: '2 Credits',
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      orgLogoUrl: 'assets/images/image 171.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Manage chronic and complex diseases',
      guideline:'KEY HIGHLIGHTS',
      showWatch: true,
      showLiveButton: true
    },
    {
      imageUrl: 'assets/images/Frame 1261159697.png',
      viewers: '200+',
      duration: '24:50',
      credits: '1.5 Credits',
      expiration: 'Expiring in 23h 30m',
      title: 'Virus is like any other respiratory virus that causes common',
      orgLogoUrl: 'assets/images/gsk.png',
      organization: 'by GSK',
      highlight: 'Manage chronic and complex diseases',
      guideline:'KEY HIGHLIGHTS',
      showWatch: true,
      showLiveButton: true
    },
    {
      imageUrl: 'assets/images/Frame 1261159697.png',
      viewers: '200+',
      duration: '24:50',
      credits: '1.5 Credits',
      expiration: 'Expiring in 23h 30m',
      title: 'Virus is like any other respiratory virus that causes common',
      orgLogoUrl: 'assets/images/gsk.png',
      guideline:'KEY HIGHLIGHTS',
      organization: 'by GSK',
      highlight: 'Manage chronic and complex diseases',
      showWatch: true,
      showLiveButton: true
    },
    {
      imageUrl: 'assets/images/image.png',
      viewers: '200+',
      duration: '24:50',
      credits: '2 Credits',
      title: 'Virus is like any other respiratory virus that causes common',
      orgLogoUrl: 'assets/images/download 1.png',
      organization: 'by Bayer',
      highlight: 'Manage chronic and complex diseases',
      guideline:'KEY HIGHLIGHTS',
      showExtraIcons: true,
      showWatch: true
    }
  ];
}
