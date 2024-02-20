import { Component, Input } from '@angular/core';
import { ProjectDetails } from '../../types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() projectDetails: ProjectDetails;
  constructor(private router: Router) {}
  goToURL(url: string | undefined) {
    if(url)
    this.router.navigateByUrl(url);
  }
}
