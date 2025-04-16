import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService, WeatherData } from './services/weather.service';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { RouterModule } from '@angular/router';
import { CustomHeaderLinkComponent } from '../../../shared/components/custom-header-link/custom-header-link.component';
import { CustomHeaderLink } from '../../../interfaces/custom-header-link.interface';
import { LocalstorageService } from '../../../core/services/localstorage';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LocationSearchComponent,
    WeatherCardComponent,
    RouterModule,
    CustomHeaderLinkComponent,
    SharedModule
  ],
  providers: [WeatherService],
  templateUrl: './weather-dashboard.component.html'
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {
  locations: string[] = [];
  weatherDataMap: Map<string, WeatherData> = new Map();
  loading: boolean = false;
  loadingMap: Map<string, boolean> = new Map();
  error: string | null = null;
  errorMap: Map<string, string> = new Map();
  private routeSubscription: Subscription | null = null;

  headerLinkItems: CustomHeaderLink[] = [
    {
      name: 'All Projects',
      isActive: false,
      routeLink: '/home/projects'
    },
    {
      name: 'Weather Dashboard',
      isActive: true
    }
  ];

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorage: LocalstorageService
  ) {}

  ngOnInit(): void {
    // Check if there are locations in the URL
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      const savedLocations = this.localStorage.getItem('weatherLocations');
      if (savedLocations) {
        this.locations = JSON.parse(savedLocations);
      }

      if (params['locations']) {
        const urlLocations = params['locations'].split('|');
        urlLocations.forEach((location: string) => {
          const cityName = location.split(',')[0].trim(); // Get only the city name
          if (!this.locations.includes(cityName)) {
            this.locations.push(cityName);
          }
        });
        
        // Save merged locations
        this.saveLocations();
      }

      // Load weather for all locations
      if (this.locations.length > 0) {
        this.loadAllLocations();
        this.updateUrlWithLocations();
      } else {
        // If no locations at all, try to get current location
        this.getCurrentLocation();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  loadSavedLocations(): void {
    const savedLocations = this.localStorage.getItem('weatherLocations');
    if (savedLocations) {
      this.locations = JSON.parse(savedLocations);
    }
  }

  saveLocations(): void {
    this.localStorage.setItem('weatherLocations', JSON.stringify(this.locations));
  }

  getCurrentLocation(): void {
    this.loading = true;
    this.error = null;
    this.weatherService.getCurrentLocation().subscribe({
      next: (location: string) => {
        this.loading = false;
        if (location) {
          this.addLocation(location);
        }
      },
      error: (err: Error) => {
        this.loading = false;
        this.error = 'Could not detect your location. Please search for a location manually.';
        console.error('Error getting current location:', err);
      }
    });
  }

  loadAllLocations(): void {
    // Clear any existing data
    this.weatherDataMap.clear();
    this.loadingMap.clear();
    this.errorMap.clear();

    // Load data for all locations
    this.locations.forEach(location => {
      this.loadWeatherData(location);
    });
  }

  loadWeatherData(location: string): void {
    if (!location) return;
    
    this.loadingMap.set(location, true);
    this.errorMap.delete(location);
    
    this.weatherService.getWeatherData(location).subscribe({
      next: (data: WeatherData) => {
        this.weatherDataMap.set(location, data);
        this.loadingMap.set(location, false);
        this.error = null;
      },
      error: (err: Error) => {
        this.errorMap.set(location, `Error loading weather data for ${location}. Please try again.`);
        this.loadingMap.set(location, false);
        console.error(`Error loading weather data for ${location}:`, err);
      }
    });
  }

  addLocation(location: string): void {
    // Clear any previous error
    this.error = null;
    
    // Extract only the city name
    const cityName = location.split(',')[0].trim();
    
    if (!this.locations.includes(cityName)) {
      this.locations.push(cityName);
      this.saveLocations();
      this.loadWeatherData(cityName);
      this.updateUrlWithLocations();
    }
  }

  removeLocation(location: string, event: Event): void {
    event.stopPropagation();
    
    this.locations = this.locations.filter(loc => loc !== location);
    this.saveLocations();
    this.weatherDataMap.delete(location);
    this.loadingMap.delete(location);
    this.errorMap.delete(location);
    this.updateUrlWithLocations();
  }

  updateUrlWithLocations(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        locations: this.locations.join('|') // Use pipe (|) as separator
      },
      queryParamsHandling: 'merge'
    });
  }

  shareLocations(): void {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard! Share this link to show the same locations to others.');
    }).catch(err => {
      console.error('Failed to copy link:', err);
    });
  }
} 