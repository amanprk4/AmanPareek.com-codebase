import { Component } from '@angular/core';
import { fadeInOutTrigger } from '../../shared/animations/about-me-animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  animations: [fadeInOutTrigger],
})
export class AboutMeComponent {
  radioButtons = [
    { value: "short", displayValue: "Short" },
    { value: "medium", displayValue: "Medium" },
    { value: "long", displayValue: "Long" },
  ];

  aboutMeBio:any = {
    short: 'short_description',
    medium: 'medium_description',
    long: 'long_description',
  };

  selectedBioLength = "short";

  constructor() {}

  ngOnInit(): void {
  }

  getDefaultRadioSelect(value: any) {
    return value === "short";
  }

  changeBioLength(event: any) {
    this.selectedBioLength = event.value;
  }
}
