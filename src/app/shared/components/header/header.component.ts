import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  rightNotificationItems = [
    {
      name: ".viewResume()",
      routeLink: "/home/resume",
    },
    {
      name: ".knowAman()",
      routeLink: "/home/about-me",
    },
    {
      name: ".reachOut()",
      routeLink: "/home/contact-me",
    },
  ];
  

  currentLocation = 'Bangalore, India';
  currentLocationSmall = 'India';
  currentProfessionTitle = 'Senior Software Engineer';
  currentProfessionTitleSmall = 'SSE';
  currentlyWorkingIn = 'Zeotap';
  currentCompanyLink = 'https://zeotap.com/';

  constructor() {}

  ngOnInit(): void {
  }
}
