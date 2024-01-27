import { Component } from '@angular/core';
import { fadeInOutTrigger } from '../../shared/animations/about-me-animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './tempAboutMestylr.scss',
  animations: [fadeInOutTrigger],
})
export class AboutMeComponent {
  radioButtons = [
    { value: "short", displayValue: "Short" },
    { value: "medium", displayValue: "Medium" },
    { value: "long", displayValue: "Long" },
  ];

  aboutMeBio:any = {
    short: "",
    medium: "",
    long: ""
  };

  selectedBioLength: any;

  constructor() {}

  ngOnInit(): void {
    this.setAboutMeVariables();
  }

  getDefaultRadioSelect(value: any) {
    return value === "short";
  }

  changeBioLength(event: any) {
    this.selectedBioLength = event.value;
  }

  setAboutMeVariables() {
    const aboutMe = {
      short_description: 'short desc',
      medium_description: 'med desc',
      long_description: 'long desc'
    }
    this.aboutMeBio = {
      short: aboutMe.short_description,
      medium: aboutMe.medium_description,
      long: aboutMe.long_description,
    };
    this.selectedBioLength = "short";
  }
}
