import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="weather-card border border-primary-100/40 border-solid" [ngClass]="getWeatherBackground()">
      <div class="weather-animation"></div>
      <div class="card-header">
        <div class="location-info">
          <h3>{{ location }}</h3>
          <span class="location-details" *ngIf="weatherData">
            {{ weatherData.state ? weatherData.state + ', ' : '' }}{{ weatherData.country }}
          </span>
        </div>
        <span class="date">{{ getCurrentDate() }}</span>
      </div>
      
      <div *ngIf="isLoading" class="loading-state">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <p>Loading weather data...</p>
      </div>
      
      <div *ngIf="error" class="error-state">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>{{ error }}</p>
      </div>
      
      <div *ngIf="!isLoading && !error && weatherData" class="card-content">
        <div class="weather-icon">
          <i [class]="getWeatherIcon()"></i>
        </div>
        
        <div class="temperature">
          <span class="current-temp">{{ weatherData.temperature }}°C</span>
          <span class="feels-like">Feels like: {{ weatherData.feelsLike }}°C</span>
        </div>
        
        <div class="weather-details">
          <div class="detail">
            <i class="fa-solid fa-droplet"></i>
            <span>Humidity: {{ weatherData.humidity }}%</span>
          </div>
          <div class="detail">
            <i class="fa-solid fa-wind"></i>
            <span>Wind: {{ weatherData.windSpeed }} m/s</span>
          </div>
        </div>
        
        <div class="weather-condition">
          {{ weatherData.description }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes rain {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 100%;
      }
    }

    @keyframes heavy-rain {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 100%;
      }
    }

    @keyframes snow {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 100%;
      }
    }

    @keyframes heavy-snow {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 100%;
      }
    }

    @keyframes clouds {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 0;
      }
    }

    @keyframes strong-wind {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 0;
      }
    }

    @keyframes thunder {
      0% {
        filter: brightness(1);
      }
      92% {
        filter: brightness(1);
      }
      93% {
        filter: brightness(2);
      }
      94% {
        filter: brightness(1);
      }
      96% {
        filter: brightness(2);
      }
      98% {
        filter: brightness(1);
      }
    }

    @keyframes hot-pulse {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes cold-pulse {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .weather-card {
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .weather-animation {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 0;
    }

    .card-header, .card-content, .loading-state, .error-state {
      position: relative;
      z-index: 1;
    }

    /* Weather-specific backgrounds */
    .weather-rain .weather-animation {
      background-image: 
        repeating-linear-gradient(transparent, transparent 5px, rgba(255, 255, 255, 0.1) 5px, rgba(255, 255, 255, 0.1) 10px);
      animation: rain 1s linear infinite;
      opacity: 0.7;
    }

    .weather-heavy-rain .weather-animation {
      background-image: 
        repeating-linear-gradient(transparent, transparent 3px, rgba(255, 255, 255, 0.2) 3px, rgba(255, 255, 255, 0.2) 6px);
      animation: heavy-rain 0.5s linear infinite;
      opacity: 0.8;
    }

    .weather-snow .weather-animation {
      background-image: radial-gradient(circle at 50% 50%, white 0%, transparent 8%),
                      radial-gradient(circle at 30% 30%, white 0%, transparent 8%),
                      radial-gradient(circle at 70% 70%, white 0%, transparent 8%);
      background-size: 30px 30px;
      animation: snow 5s linear infinite;
      opacity: 0.7;
    }

    .weather-heavy-snow .weather-animation {
      background-image: radial-gradient(circle at 50% 50%, white 0%, transparent 8%),
                      radial-gradient(circle at 30% 30%, white 0%, transparent 8%),
                      radial-gradient(circle at 70% 70%, white 0%, transparent 8%),
                      radial-gradient(circle at 20% 20%, white 0%, transparent 8%),
                      radial-gradient(circle at 80% 80%, white 0%, transparent 8%);
      background-size: 20px 20px;
      animation: heavy-snow 3s linear infinite;
      opacity: 0.8;
    }

    .weather-clouds .weather-animation {
      background-image: 
        linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
      background-size: 200% 100%;
      animation: clouds 8s linear infinite;
      opacity: 0.3;
    }

    .weather-clear {
      background: linear-gradient(120deg, rgba(255,255,255,0.9), rgba(230,255,255,0.9));
    }

    .weather-thunder {
      animation: thunder 5s infinite;
    }

    .weather-fog .weather-animation {
      background: linear-gradient(0deg, rgba(255,255,255,0.8) 0%, transparent 100%);
      opacity: 0.5;
    }

    /* Temperature variations */
    .weather-hot {
      background: linear-gradient(120deg, rgba(255,200,100,0.3), rgba(255,150,50,0.3));
      background-size: 200% 200%;
      animation: hot-pulse 5s ease infinite;
    }

    .weather-cold {
      background: linear-gradient(120deg, rgba(200,230,255,0.3), rgba(150,200,255,0.3));
      background-size: 200% 200%;
      animation: cold-pulse 5s ease infinite;
    }

    /* Wind variations */
    .weather-windy .weather-animation {
      background-image: 
        linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
      background-size: 200% 100%;
      animation: strong-wind 3s linear infinite;
      opacity: 0.4;
    }

    .weather-very-windy .weather-animation {
      background-image: 
        linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
      background-size: 200% 100%;
      animation: strong-wind 1.5s linear infinite;
      opacity: 0.5;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
    }

    .location-info {
      display: flex;
      flex-direction: column;
    }
    
    .card-header h3 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .location-details {
      font-size: 0.8rem;
      color: #666;
      margin-top: 2px;
    }
    
    .date {
      font-size: 0.9rem;
      color: #666;
    }
    
    .loading-state, .error-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      text-align: center;
    }
    
    .loading-state i, .error-state i {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    .error-state {
      color: #d32f2f;
    }
    
    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;
    }
    
    .weather-icon {
      font-size: 3rem;
      margin: 10px 0;
      color: #1976d2;
    }
    
    .temperature {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0;
    }
    
    .current-temp {
      font-size: 2.5rem;
      font-weight: 700;
    }
    
    .feels-like {
      font-size: 0.9rem;
      color: #666;
      margin-top: 5px;
    }
    
    .weather-details {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin: 15px 0;
    }
    
    .detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.9rem;
    }
    
    .detail i {
      margin-bottom: 5px;
      color: #1976d2;
    }
    
    .weather-condition {
      text-align: center;
      font-size: 1.1rem;
      font-weight: 500;
      margin-top: 10px;
      text-transform: capitalize;
    }
  `]
})
export class WeatherCardComponent {
  @Input() weatherData: WeatherData | null = null;
  @Input() location: string = '';
  @Input() isLoading: boolean = false;
  @Input() error: string | null = null;

  getCurrentDate(): string {
    const now = new Date();
    return now.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  getWeatherIcon(): string {
    if (!this.weatherData) return 'fa-solid fa-cloud';
    
    const condition = this.weatherData.description.toLowerCase();
    
    if (condition.includes('clear') || condition.includes('sunny')) {
      return 'fa-solid fa-sun';
    } else if (condition.includes('cloud')) {
      return 'fa-solid fa-cloud';
    } else if (condition.includes('rain')) {
      return 'fa-solid fa-cloud-rain';
    } else if (condition.includes('snow')) {
      return 'fa-solid fa-snowflake';
    } else if (condition.includes('thunder')) {
      return 'fa-solid fa-bolt';
    } else if (condition.includes('fog') || condition.includes('mist')) {
      return 'fa-solid fa-smog';
    } else {
      return 'fa-solid fa-cloud';
    }
  }

  getWeatherBackground(): string {
    if (!this.weatherData) return '';
    
    const condition = this.weatherData.description.toLowerCase();
    const classes: string[] = [];
    
    // Weather condition classes
    if (condition.includes('rain') || condition.includes('drizzle')) {
      if (condition.includes('heavy') || condition.includes('violent')) {
        classes.push('weather-heavy-rain');
      } else {
        classes.push('weather-rain');
      }
    } else if (condition.includes('snow')) {
      if (condition.includes('heavy')) {
        classes.push('weather-heavy-snow');
      } else {
        classes.push('weather-snow');
      }
    } else if (condition.includes('cloud')) {
      classes.push('weather-clouds');
    } else if (condition.includes('clear') || condition.includes('sunny')) {
      classes.push('weather-clear');
    } else if (condition.includes('thunder')) {
      classes.push('weather-thunder');
    } else if (condition.includes('fog') || condition.includes('mist')) {
      classes.push('weather-fog');
    }
    
    // Temperature classes
    if (this.weatherData.temperature >= 30) {
      classes.push('weather-hot');
    } else if (this.weatherData.temperature <= 5) {
      classes.push('weather-cold');
    }
    
    // Wind classes
    if (this.weatherData.windSpeed >= 15) {
      classes.push('weather-very-windy');
    } else if (this.weatherData.windSpeed >= 8) {
      classes.push('weather-windy');
    }
    
    return classes.join(' ');
  }
} 