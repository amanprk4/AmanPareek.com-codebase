import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="weather-card">
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
    .weather-card {
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
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
} 