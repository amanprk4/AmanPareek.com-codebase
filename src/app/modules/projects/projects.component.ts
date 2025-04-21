import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from '../../interfaces/project-details.interface';
import { CustomHeaderLink } from '../../interfaces/custom-header-link.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomHeaderLinkComponent } from '../../shared/components/custom-header-link/custom-header-link.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

interface Text {
  language: string;
  text: string;
  color?: string;
  flag?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CustomHeaderLinkComponent,
    ProjectCardComponent
  ]
})
export class ProjectsComponent implements OnInit{
  allProjects:ProjectDetails[] = [
    {
      name: 'Weather Dashboard',
      path: 'home/projects/weather-dashboard',
      description: 'Stay informed about weather conditions with our interactive Weather Dashboard. Search for locations, save your favorites, and get real-time weather updates including temperature, conditions, humidity, and wind speed. The dynamic background changes based on current weather conditions for an immersive experience.',
      icon: 'fas fa-cloud-sun-rain',
      underDevelopment: false,
      githubUrl: 'https://github.com/AmanPareek/AmanPareek.com',
      liveUrl: 'https://amanpareek.com/home/projects/weather-dashboard'
    },
    {
      name: 'Todo List',
      path: 'home/projects/todo-list',
      description: 'A simple yet powerful Todo List application that helps you manage your tasks efficiently. Features include adding, completing, and removing todos with smooth animations. Your todos are automatically saved to local storage, ensuring your tasks persist even after closing the browser.',
      icon: 'fas fa-tasks',
      underDevelopment: false,
      githubUrl: 'https://github.com/AmanPareek/AmanPareek.com',
      liveUrl: 'https://amanpareek.com/home/projects/todo-list'
    }
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
