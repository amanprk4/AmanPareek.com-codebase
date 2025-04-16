import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../services/weather.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface LocationSuggestion {
  name: string;
  state?: string;
  country: string;
  displayName: string;
}

@Component({
  selector: 'app-location-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  template: `
    <div class="w-1/2 mx-auto">
      <div class="relative">
        <input
          type="text"
          [(ngModel)]="searchQuery"
          (input)="onSearch()"
          placeholder="Search for a location..."
          class="w-full px-4 py-2 text-lg rounded-lg border border-primary-700 bg-primary-50/10 text-primary-900 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <div *ngIf="suggestions.length > 0" class="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-primary-200">
          <div
            *ngFor="let suggestion of suggestions"
            (click)="selectLocation(suggestion)"
            class="px-4 py-2 cursor-pointer hover:bg-primary-50"
          >
            <div class="text-primary-900">{{ suggestion.name }}</div>
            <div class="text-sm text-gray-500">
              {{ suggestion.state ? suggestion.state + ', ' : '' }}{{ suggestion.country }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class LocationSearchComponent {
  @Output() locationAdded = new EventEmitter<string>();
  
  searchQuery: string = '';
  suggestions: LocationSuggestion[] = [];
  private searchSubject = new Subject<string>();

  constructor(private weatherService: WeatherService) {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.weatherService.searchLocations(query))
    ).subscribe({
      next: (locations) => {
        this.suggestions = locations;
      },
      error: (error) => {
        console.error('Error searching locations:', error);
        this.suggestions = [];
      }
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchSubject.next(this.searchQuery);
    } else {
      this.suggestions = [];
    }
  }

  selectLocation(suggestion: LocationSuggestion): void {
    this.locationAdded.emit(suggestion.displayName);
    this.searchQuery = ''; // Clear the search bar
    this.suggestions = []; // Clear suggestions
  }
} 