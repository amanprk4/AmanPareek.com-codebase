import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from '../../shared/animations/router-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [slider],
})
export class HomeComponent {

  getAnimationData(rOutlet: RouterOutlet) {
    const routeData = rOutlet.activatedRouteData["animation"];
    if (!routeData) {
      return "aboutMe";
    } else {
      return routeData["page"];
    }
  }
}
