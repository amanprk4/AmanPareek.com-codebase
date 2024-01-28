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
    short: `Experienced Senior Software Engineer with a 4.5-year focus on Angular and frontend development. 
    Known for delivering scalable and user-centric solutions, I am committed to innovation and possess a proven track record in driving impactful projects. 
    Eager to contribute technical excellence to dynamic teams
    `,
    medium: `Seasoned Senior Software Engineer with 4.5 years specializing in Angular and frontend development. 
    Renowned for crafting scalable and user-centric solutions, I bring a proven track record in driving impactful projects. 
    From developing in-house tools for automation to creating a Customer 360 platform, my commitment to innovation shines through. 
    Adept at translating business requirements into efficient code, I am dedicated to staying abreast of technology trends. 
    Eager to contribute technical excellence and collaborative energy to a forward-thinking team, creating cutting-edge solutions for complex challenges in the ever-evolving landscape of software engineering
    `,
    long: `Dynamic Senior Software Engineer with 4.5 years of expertise in Angular and frontend development. 
    Recognized for creating scalable and user-centric solutions, I have a proven track record in driving impactful projects. 
    From developing in-house tools, such as a Pricing Tool for project revenue automation and a Sentiment Analysis Tool for HR, to spearheading the creation of a Customer 360 platform, I blend technical prowess with innovation. 
    Adept at translating business needs into efficient and maintainable code, I am committed to staying at the forefront of technology trends. 
    Eager to contribute my technical excellence and collaborative approach to a forward-thinking team, delivering cutting-edge solutions in the ever-evolving landscape of software engineering.
    `,
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
