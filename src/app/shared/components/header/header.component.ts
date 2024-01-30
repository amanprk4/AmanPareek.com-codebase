import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  rightNotificationItems = [
    {
      name: ".knowAman()",
      routeLink: "/home/about-me",
    },
    {
      name: ".reachOut()",
      routeLink: "/home/contact-me",
    },
  ];
  

  currentLocation: any;
  currentProfessionTitle :any;
  currentlyWorkingIn :any;
  currentCompanyLink :any;

  constructor() {}

  ngOnInit(): void {
    this.currentCompanyLink = 'https://zeotap.com/';
    this.currentLocation = 'Bangalore, India';
    this.currentProfessionTitle = 'Senior Software Engineer';
    this.currentlyWorkingIn = 'Zeotap';
  }
  // To open the link in another tab
  openCompanyLink() {
    window.open(this.currentCompanyLink, "_blank");
  }
}
