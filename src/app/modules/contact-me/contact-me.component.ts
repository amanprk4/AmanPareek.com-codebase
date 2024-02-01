import { AnimationBuilder, animate, style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html'
})
export class ContactMeComponent {
  allContacts: any = [];

  constructor(private builder: AnimationBuilder) {}

  ngOnInit(): void {
    this.allContacts = [
      {
        title: "Instagram",
        message: "Not here that actively, posts like twice a year but checks everyday",
        followMeMessage: "Follow Me on Instagram",
        followLink: "https://instagram.com/m__ammy?igshid=1ac5y6jsjqqb8",
        iconClass: 'fa-brands fa-instagram'
      },
      {
        title: "Facebook",
        message:
          "Last time i posted a picture on FB, it was my college graduation.",
        followMeMessage: "Follow Me on Facebook",
        followLink: "https://www.facebook.com/aman.pareek.71/",
        iconClass: 'fa-brands fa-facebook'
      },
      {
        title: "LinkedIn",
        message: "Check out LinkedIn daily. Hit me up if you wanna connect",
        followMeMessage: "Follow Me on LinkedIn",
        followLink: "https://www.linkedin.com/in/aman-pareek-9b8942169",
        iconClass: 'fa-brands fa-linkedin'
      },
      {
        title: "Email",
        message:
          "Want to hire me or just wanna share something professionally, send a mail.",
        followMeMessage: "Send a mail to Aman Pareek",
        followLink: "mailto:amanprk4@gmail.com?subject=Hello Aman!",
        iconClass: 'fa-regular fa-envelope'
      },
      {
        title: 'GitHub',
        message: "Don't have a lot of useful content here as of now, but soon :)",
        followMeMessage: 'Check out my GitHub page',
        followLink:'https://github.com/amanprk4',
        iconClass:"fa-brands fa-github"
      }
    ];
  }

  openLinkInAnotherTab(link: any) {
    window.open(link, "_blank");
  }

  oonMouseOverAnimation(element: any) {
    const animation = this.builder.build([
      style({transform:'scale(1)'}),
      animate(300, style({ transform: "scale(1.05)" })),
    ]);

    const player = animation.create(element);
    player.play();
  }

  oonMouseLeaveAnimation(element: any) {
    const animation = this.builder.build([
      style({transform:'scale(1.05)'}),
      animate(300, style({ transform: "scale(1)" })),
    ]);

    const player = animation.create(element);
    player.play();
  }
}
