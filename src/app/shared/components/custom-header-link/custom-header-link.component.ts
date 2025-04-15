import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomHeaderLink } from '../../../interfaces/custom-header-link.interface';

@Component({
  selector: 'app-custom-header-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex items-center gap-8">
      <div
        *ngFor="let item of headerLinkItems"
        class="flex items-center cursor-pointer group"
      >
        <div class="flex items-center gap-2">
          <i class="fa-regular fa-file-lines text-xl text-primary-700"></i>
          <div
            class="text-base text-black hover:text-primary-600 focus:outline-none"
            [routerLink]="item.routeLink"
            routerLinkActive="!text-primary-700 border-b-2 border-solid border-primary-700"
          >
            {{ item.name }}
          </div>
          <i class="fa-solid fa-chevron-down text-xs text-primary-700"></i>
        </div>
      </div>
    </div>
  `
})
export class CustomHeaderLinkComponent {
  @Input() headerLinkItems: CustomHeaderLink[] = [];
} 