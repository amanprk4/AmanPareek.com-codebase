import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomHeaderLink, ProjectDetails } from './resume-builder/types/types';

interface Text {
  language: string;
  text: string;
  color?: string;
  flag?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})

export class ProjectsComponent implements OnInit{
  allProjects:ProjectDetails[] = [
    {
      name: 'Resume Builder',
      path: 'home/projects/resume-builder',
      description: 'Crafting the perfect resume is now easier than ever with our Resume Builder. Our user-friendly interface streamlines the process, allowing you to create personalized resumes that stand out. Impress employers with professionally formatted resumes that highlight your skills and experiences effectively.',
      icon: 'fa-user-pen',
      underDevelopment: true
    },
  ]

  headerLinkItems: CustomHeaderLink[] = [
    {
      name: 'All Projects',
      isActive: true
    }
  ]
  constructor(private router: Router){

  }

  ngOnInit(): void {
  }
}
