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
      },
      {
        title: "Facebook",
        message:
          "Last time i posted a picture on FB, it was my college graduation.",
        followMeMessage: "Follow Me on Facebook",
        followLink: "https://www.facebook.com/aman.pareek.71/",
      },
      {
        title: "LinkedIn",
        message: "Check out LinkedIn daily. Hit me up if you wanna connect",
        followMeMessage: "Follow Me on LinkedIn",
        followLink: "https://www.linkedin.com/in/aman-pareek-9b8942169",
      },
      {
        title: "Email",
        message:
          "Want to hire me or just wanna share something professionally, send a mail.",
        followMeMessage: "Send a mail to Aman Pareek",
        followLink: "mailto:amanprk4@gmail.com?subject=Hello Aman!",
      },
    ];
  }

  openLinkInAnotherTab(link: any) {
    window.open(link, "_blank");
  }

  oonMouseOverAnimation(element: any) {
    const animation = this.builder.build([
      style({transform:'rotate(3deg)'}),
      animate(300, style({ transform: "rotate(0)" })),
    ]);

    const player = animation.create(element);
    player.play();
  }

  oonMouseLeaveAnimation(element: any) {
    const animation = this.builder.build([
      style({transform:'rotate(-3deg)'}),
      animate(300, style({ transform: "rotate(0)" })),
    ]);

    const player = animation.create(element);
    player.play();
  }
}
