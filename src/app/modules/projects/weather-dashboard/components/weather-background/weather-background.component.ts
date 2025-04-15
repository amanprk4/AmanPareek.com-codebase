import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="weather-background" [ngClass]="backgroundClass">
      <div class="overlay"></div>
    </div>
  `,
  styles: [`
    .weather-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: background-image 0.5s ease;
      z-index: 0;

      &.clear {
        background-image: url('/assets/images/weather/clear.jpg');
      }

      &.clouds {
        background-image: url('/assets/images/weather/clouds.jpg');
      }

      &.rain {
        background-image: url('/assets/images/weather/rain.jpg');
      }

      &.snow {
        background-image: url('/assets/images/weather/snow.jpg');
      }

      &.thunderstorm {
        background-image: url('/assets/images/weather/thunderstorm.jpg');
      }

      &.mist, &.fog, &.haze {
        background-image: url('/assets/images/weather/fog.jpg');
      }

      &.default {
        background-image: url('/assets/images/weather/default.jpg');
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  `]
})
export class WeatherBackgroundComponent implements OnChanges {
  @Input() weatherCondition: string | undefined = '';
  backgroundClass: string = 'default';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherCondition']) {
      this.updateBackgroundClass();
    }
  }

  private updateBackgroundClass(): void {
    if (!this.weatherCondition) {
      this.backgroundClass = 'default';
      return;
    }

    const condition = this.weatherCondition.toLowerCase();
    
    if (condition.includes('clear')) {
      this.backgroundClass = 'clear';
    } else if (condition.includes('cloud')) {
      this.backgroundClass = 'clouds';
    } else if (condition.includes('rain')) {
      this.backgroundClass = 'rain';
    } else if (condition.includes('snow')) {
      this.backgroundClass = 'snow';
    } else if (condition.includes('thunder')) {
      this.backgroundClass = 'thunderstorm';
    } else if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) {
      this.backgroundClass = 'mist';
    } else {
      this.backgroundClass = 'default';
    }
  }
} 