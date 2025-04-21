import { Component, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProjectDetails } from '../../../interfaces/project-details.interface';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="group rounded-2xl p-4 border border-solid border-primary-700 cursor-pointer flex flex-col w-full hover:bg-primary-50/20 hover:scale-105 transition-transform relative" (click)="navigateToProject()">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <i [ngClass]="projectDetails.icon" class="text-2xl text-primary-700 mr-2"></i>
          <span class="text-xl text-black">{{ projectDetails.name }}</span>
        </div>
        <span *ngIf="projectDetails.underDevelopment" class="text-sm text-primary-700">Under Development</span>
      </div>
      <p class="text-gray-500 mt-2 overflow-hidden" [ngClass]="{'line-clamp-4': !showFullText}">{{ projectDetails.description }}</p>
      <button *ngIf="!showFullText && projectDetails.description.length > 150" (click)="openModal($event)" class="text-blue-500 hover:text-blue-700">See More</button>
      <div class="mt-4 flex gap-2">
        <a *ngIf="projectDetails.githubUrl" [href]="projectDetails.githubUrl" target="_blank" class="text-primary-700 hover:text-primary-600" (click)="$event.stopPropagation()">
          <i class="fab fa-github"></i>
        </a>
        <a *ngIf="projectDetails.liveUrl" [href]="projectDetails.liveUrl" target="_blank" class="text-primary-700 hover:text-primary-600" (click)="$event.stopPropagation()">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
      <div class="absolute bottom-0 left-0 w-full p-3 bg-primary-700 text-white text-center rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity">
        Check it out!
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input() projectDetails!: ProjectDetails;
  showFullText = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  navigateToProject() {
    this.router.navigate([this.projectDetails.path]);
  }

  openModal(event: Event) {
    event.stopPropagation();
    this.dialog.open(ProjectDescriptionModal, {
      data: { description: this.projectDetails.description }
    });
  }
}

@Component({
  selector: 'project-description-modal',
  template: `
     <div mat-dialog-content class='p-6'>
      <p>{{ data.description }}</p>
    </div>
  `
})
export class ProjectDescriptionModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { description: string }) {}
} 