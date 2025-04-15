import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

export interface WeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  pressure: number;
  visibility: number;
  sunrise: number;
  sunset: number;
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    surface_pressure: number;
    visibility: number;
    weather_code: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private geocodingApiUrl = 'https://geocoding-api.open-meteo.com/v1/search';
  private weatherApiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getCurrentLocation(): Observable<string> {
    return new Observable<string>(observer => {
      if (!navigator.geolocation) {
        observer.error(new Error('Geolocation is not supported by your browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => {
          // Get city name from coordinates using Open-Meteo geocoding API
          this.http.get<any>(`${this.geocodingApiUrl}?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&count=1&language=en&format=json`)
            .subscribe({
              next: (response) => {
                if (response.results && response.results.length > 0) {
                  observer.next(response.results[0].name);
                } else {
                  observer.error(new Error('Location not found'));
                }
              },
              error: (err) => observer.error(err)
            });
        },
        error => {
          observer.error(new Error('Unable to retrieve your location'));
        }
      );
    });
  }

  getWeatherData(location: string): Observable<WeatherData> {
    return this.http.get<any>(`${this.geocodingApiUrl}?name=${encodeURIComponent(location)}&count=1&language=en&format=json`)
      .pipe(
        switchMap(geoData => {
          if (!geoData.results || geoData.results.length === 0) {
            return throwError(() => new Error('Location not found'));
          }
          const { latitude, longitude, name } = geoData.results[0];
          return this.http.get<OpenMeteoResponse>(
            `${this.weatherApiUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,surface_pressure,visibility,weather_code&daily=sunrise,sunset&timezone=auto`
          ).pipe(
            map(weatherData => this.mapToWeatherData(weatherData, name))
          );
        }),
        catchError(error => {
          console.error('Error fetching weather data:', error);
          return throwError(() => error);
        })
      );
  }

  searchLocations(query: string): Observable<string[]> {
    if (!query || query.length < 2) {
      return of([]);
    }
    return this.http.get<any>(`${this.geocodingApiUrl}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`)
      .pipe(
        map(response => response.results?.map((result: any) => result.name) || []),
        catchError(() => of([]))
      );
  }

  private mapToWeatherData(data: OpenMeteoResponse, location: string): WeatherData {
    return {
      location,
      temperature: data.current.temperature_2m,
      feelsLike: data.current.temperature_2m, // Open-Meteo doesn't provide feels-like temperature
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      description: this.getWeatherDescription(data.current.weather_code),
      icon: this.getWeatherIcon(data.current.weather_code),
      pressure: data.current.surface_pressure,
      visibility: data.current.visibility,
      sunrise: new Date(data.daily.sunrise[0]).getTime() / 1000,
      sunset: new Date(data.daily.sunset[0]).getTime() / 1000
    };
  }

  private getWeatherDescription(code: number): string {
    const descriptions: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    };
    return descriptions[code] || 'Unknown';
  }

  private getWeatherIcon(code: number): string {
    const icons: { [key: number]: string } = {
      0: '01d', // Clear sky
      1: '02d', // Mainly clear
      2: '03d', // Partly cloudy
      3: '04d', // Overcast
      45: '50d', // Foggy
      48: '50d', // Depositing rime fog
      51: '09d', // Light drizzle
      53: '09d', // Moderate drizzle
      55: '09d', // Dense drizzle
      61: '10d', // Slight rain
      63: '10d', // Moderate rain
      65: '10d', // Heavy rain
      71: '13d', // Slight snow
      73: '13d', // Moderate snow
      75: '13d', // Heavy snow
      77: '13d', // Snow grains
      80: '09d', // Slight rain showers
      81: '09d', // Moderate rain showers
      82: '09d', // Violent rain showers
      85: '13d', // Slight snow showers
      86: '13d', // Heavy snow showers
      95: '11d', // Thunderstorm
      96: '11d', // Thunderstorm with slight hail
      99: '11d'  // Thunderstorm with heavy hail
    };
    return icons[code] || '01d';
  }
} 