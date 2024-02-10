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
    short: `<em>Aman Pareek, '96.</em> Front-end wordsmith and Marvel/DC enthusiast. VIT Vellore alum. Passionate about code, movies, and literary adventures. Always ready for a road trip or a scenic car drive. <em>Let's craft digital tales!</em> 🚀📚 #TechWordsmith`,
    medium: `<em>Aman Pareek, born '96,</em> crafts digital narratives as a front-end scribe. Marvel/DC savant, VIT Vellore alumnus <em>dissecting code during the day and deciphering cosmic stories by night.</em> Passionate about code, movies, and literary adventures. Always up for a road trip or a scenic car drive. <em>Join me in scripting the next chapter of innovation!</em> 🚀📚✨ #TechScribe #CodeCraftsman`,
    long: `In the labyrinth of code and creativity,<em> meet Aman Pareek, a '96 VIT Vellore alumnus,</em> scripting digital fables as a front-end storyteller. Born to the skies, <em> an Air Force legacy,</em> I navigate the code by day and interpret cosmic tales by night.

    A Marvel/DC connoisseur, <em>each line of code contributes to the narrative.</em> As a cinema savant and bookish bard, inspiration dances between screens and pages. Passionate about code, movies, and literary adventures. Always up for a road trip or a scenic car drive, <em>join me in weaving the fabric of innovation!</em> 🚀📚✨ #TechStoryteller #DigitalWordsmith`,
  };

  selectedBioLength = "long";

  constructor() {}

  ngOnInit(): void {
  }

  getDefaultRadioSelect(value: any) {
    return value === "long";
  }

  changeBioLength(event: any) {
    this.selectedBioLength = event.value;
  }
}
