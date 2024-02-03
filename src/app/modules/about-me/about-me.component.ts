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
    short: `<span class="text-primary-900 text-2xl">Aman Pareek, '96.</span> Front-end wordsmith and Marvel/DC enthusiast. VIT Vellore alum. Passionate about code, movies, and literary adventures. Always ready for a road trip or a scenic car drive. <span class="text-primary-900 text-2xl">Let's craft digital tales!</span> 🚀📚 #TechWordsmith`,
    medium: `<span class="text-primary-900 text-2xl">Aman Pareek, born '96,</span> crafts digital narratives as a front-end scribe. Marvel/DC savant, VIT Vellore alumnus <span class="text-primary-900 text-2xl">dissecting code during the day and deciphering cosmic stories by night.</span> Passionate about code, movies, and literary adventures. Always up for a road trip or a scenic car drive. <span class="text-primary-900 text-2xl">Join me in scripting the next chapter of innovation!</span> 🚀📚✨ #TechScribe #CodeCraftsman`,
    long: `In the labyrinth of code and creativity,<span class="text-primary-900 text-2xl"> meet Aman Pareek, a '96 VIT Vellore alumnus,</span> scripting digital fables as a front-end storyteller. Born to the skies, <span class="text-primary-900 text-2xl"> an Air Force legacy,</span> I navigate the code by day and interpret cosmic tales by night.

    A Marvel/DC connoisseur, <span class="text-primary-900 text-2xl">each line of code contributes to the narrative.</span> As a cinema savant and bookish bard, inspiration dances between screens and pages. Passionate about code, movies, and literary adventures. Always up for a road trip or a scenic car drive, <span class="text-primary-900 text-2xl">join me in weaving the fabric of innovation!</span> 🚀📚✨ #TechStoryteller #DigitalWordsmith`,
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
