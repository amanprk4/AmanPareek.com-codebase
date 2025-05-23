import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from '../../shared/animations/router-animations';
import { Color, colors } from '../../shared/styles/colors';
import { animate, style, transition, trigger } from '@angular/animations';
import { LocalstorageService } from '../services/localstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    slider,
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
      ]
    )
  ],
})
export class HomeComponent {
  colors = colors;
  isHidden = false;
  selectedTheme: string;

  getAnimationData(rOutlet: RouterOutlet) {
    const routeData = rOutlet.activatedRouteData["animation"];
    if (!routeData) {
      return "aboutMe";
    } else {
      return routeData?.["page"];
    }
  }

  constructor(private cdref: ChangeDetectorRef, private localStorage: LocalstorageService) {
    this.selectedTheme = this.localStorage.getItem('selectedTheme') || 'burgundy';
  }   

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  onThemeSelection(color: Color) {
    this.selectedTheme = color.name;
    this.localStorage.setItem('selectedTheme', color.name);
  }
}
