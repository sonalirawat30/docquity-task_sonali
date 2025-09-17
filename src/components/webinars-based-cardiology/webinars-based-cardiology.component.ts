import { Component } from '@angular/core';

@Component({
  selector: 'app-webinars-based-cardiology',
  templateUrl: './webinars-based-cardiology.component.html',
  styleUrls: ['./webinars-based-cardiology.component.scss']
})
export class WebinarsBasedCardiologyComponent {
  webinars = [
    {
      imageUrl: 'assets/images/webinar-1 1.png',
      duration: '24:50',
      credits: '2 Credits',
      title: 'The Covid19 Management of Parox Health caretine',
      orgLogoUrl: 'assets/images/image 171.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Diclofenac in post operative....',
      guideline:'RELATED GUIDELINE',
      showWatch: true
    },
    {
      imageUrl: 'assets/images/220923_FKUI_APPS 2.png',
      duration: '24:50',
      credits: '3 Credits',
      expiration: 'Expiring in 23h 30m',
      title: 'New Perspectives in the Covid19 Management of Parox Health caretine...',
      orgLogoUrl: 'assets/images/image 171.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Diclofenac in post operative....',
      liveDate: '7 Jan 2025, 12:30 PM',
      guideline:'RELATED GUIDELINE',
      showNotify: true
    },
    {
      imageUrl: 'assets/images/Frame 1261159697.png',
      viewers: '200+',
      duration: '24:50',
      credits: '1.5 Credits(till 15 Dec 2024)',
      title: 'Metapneumovirus is like any other respiratory virus that causes common',
      orgLogoUrl: 'assets/images/download 1.png',
      organization: 'by PDCI Indonesia',
      highlight: 'Manage chronic and complex...',
      guideline:'RELATED GUIDELINE',
      showExtraIcons: true,
      showWatch: true
    }
  ];
}
