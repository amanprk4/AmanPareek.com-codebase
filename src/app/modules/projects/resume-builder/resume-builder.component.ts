import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomHeaderLink, TemplateDetails } from './types/types';
import { FormBuilder, FormGroup } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { LocalstorageService } from '../../../core/services/localstorage';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class ResumeBuilderComponent implements OnInit {
  headerLinkItems: CustomHeaderLink[] = [
    {
      name: 'All Projects',
      isActive: false,
      cursorPointer: true,
      routeLink: 'home/projects',
    },
    {
      name: 'Resume Builder',
      isActive: true,
    },
  ];

  allTemplates: TemplateDetails[] = [
    {
      name:'brewMaster',
      displayName: 'Brew Master Template',
      icon: "fa-solid fa-mug-hot"
      
    },
    {
      name:'whiskeyWhisperer',
      displayName: 'Whiskey Whisperer Template',
      icon: "fa-solid fa-whiskey-glass"
    },
    {
      name:'martiniMaven',
      displayName: 'Martini Maven Template',
      icon:"fa-solid fa-martini-glass-citrus"
    },
    {
      name:'ginGenius',
      displayName: 'Gin Genius Template',
      icon: 'fa-solid fa-martini-glass'
    },
    {
      name:'wineWizardry',
      displayName: 'Wine Wizardry Template',
      icon:"fa-solid fa-wine-glass"
    }
  ]

  selectedTemplate = 'brewMaster'
  isTemplateSelectionExpanded:boolean = true;

  isInformationFormDialogOpen$ = new BehaviorSubject<any>(null);

  /*

  Resume template suggestions
  BrewMaster
  Whiskey Whisperer
  Martini Maven
  Gin Genius
  Wine Wizardry

  Espresso Excellence
  Cocktail Creator
  Vodka Virtuoso
  Rum Reveler
  Tequila Tactician

  */

  informationFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private localStorage: LocalstorageService) {
  }

  ngOnInit(): void {
    this.setUpInformationForm();
  }

  setUpInformationForm() {
    this.informationFormGroup = this.formBuilder.group({
      basicInformation: this.formBuilder.group({
        name: ['Enter Name'],
        emailId: [''],
        phoneNumber: [''],
        country: [''],
        state: [''],
        city: [''],
        currentPosition: ['Enter Current Designation']
      }),
      socialInfo: this.formBuilder.group({
        linkedIn:[''],
        website:[''],
        twitter:[''],
        quora:[''],
        skype:[''],
        instagram:[''],
        facebook:[''],
        github:[''],
        medium:[''],
        stackoverflow:[''],
        others:[''],
      }),
      skills: this.formBuilder.array([]),
      workExperience: this.formBuilder.array([]),
      education: this.formBuilder.array([]),
      certificate: this.formBuilder.array([]),
      languages: this.formBuilder.array([]),
      interests: this.formBuilder.array([]),
      achievements: this.formBuilder.array([]),
      projects: this.formBuilder.array([]),
    });
  }

  onTemplateClick(template:TemplateDetails){
    this.selectedTemplate = template.name;
  }

  saveInformation(){
    console.log(this.informationFormGroup.value);
  }

  downloadResume(){
    console.log('DOWNLOAD')
  }
  onTemplateExpandButtonClick() {
    this.isTemplateSelectionExpanded = !this.isTemplateSelectionExpanded;
  }
  onResumeItemClick(infoData:any){
    this.isInformationFormDialogOpen$.next(infoData);
  }
  closeInformationForm(){
    this.isInformationFormDialogOpen$.next(null);
  }
}
