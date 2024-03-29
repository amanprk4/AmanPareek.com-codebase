import { Component } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  skillsList = [
    'Angular',
    'HTML',
    'SCSS/CSS',
    'Javascript',
    'Typescript',
    'Tailwind',
    'Angular Material',
    'Frontend Development',
    'NodeJs',
    'Git/GitLab',
    'Jira',
    'NgRx',
    'RamdaJs',
    'ReactJs',
    'ExpressJs',
    'Solution oriented',
    'Communication',
  ];

  interestList = [
    'Gaming',
    'Road trips',
    'Traveling',
    'Trekking',
    'Marvels/DC fan',
  ];

  experienceList = [
    {
      companyName: 'Zeotap',
      link: 'https://zeotap.com/',
      companyInfo: `Helps in business’s need to deliver data-driven customer experiences
      and hand-in-hand with the protection of their user’s interests.`,
      location: 'Bangalore, Karnataka, India',
      title: 'Senior Software Engineer',
      joinedFrom: '12/2021',
      joinedTill: 'Present',
      duration: '2 years, 2 months+',
      learnings: [
        `Developed a Unity demo application enabling Sales executives to <em>showcase products to prospective clients</em>, ensuring the utmost data privacy during presentations.`,
        `Spearheaded the creation of a Customer 360 platform, providing users with a <em>comprehensive view of customers </em> through identities, traits, events, and journeys`,
      ],
    },
    {
      companyName: 'Tredence',
      link: 'https://www.tredence.com/',
      companyInfo: `Tredence is a global data science solutions provider focused on solving the gap between insight creation and value realisation (last mile) problems in AI.`,
      location: 'Bangalore, Karnataka, India',
      title: 'Software Engineer',
      joinedFrom: '07/2019',
      joinedTill: '12/2021',
      duration: '2 years, 6 months',
      learnings: [
        `Engineered an in-house Pricing Tool to automate incoming project revenue calculations, resulting in a <em>60% reduction in manual effort and time</em>. This streamlined financial project approvals significantly`,
        `Innovated a Valuation & Benchmarking Tool for financial clients, <em>enhancing efficiency by 50% and expanding user reach by 20%.</em>`,
        `Designed an in-house Sentiment Analysis Tool for the HR team, providing a flexible platform for obtaining anonymous employee feedback. This initiative skyrocketed response rates from <em>30- 40% to nearly 100%</em>`,
        `Orchestrated the end-to-end development life cycle of over <em>8 web applications within 2 years</em>, including planning, development, testing, deployment, and ongoing maintenance.`,
      ],
    },
  ];

  education = [
    {
      instituteName: 'Vellore Institute of Technology, Vellore',
      link: 'https://vit.ac.in/',
      fromTo: '2015 - 2019',
      degreeName: 'B-Tech',
      specialization: 'Electronics and Communication Engineering',
      gradePoint: '8.44',
      location: 'Vellore, TamilNadu, India',
    },
    {
      instituteName: 'Jyoti Bal Vidhya Mandir, Kota',
      fromTo: '2012 - 2014',
      degreeName: '12th Class',
      specialization: 'Mathematics/Science',
      gradePoint: '70%',
      location: 'Kota, Rajasthan, India',
    },
    {
      instituteName: 'Kendriya Vidyalaya, Baran',
      fromTo: '2011 - 2012',
      degreeName: '10th Class',
      specialization: 'Mathematics/Science',
      gradePoint: '8.4',
      location: 'Baran, Rajasthan, India',
    },
  ];

  openCompanyLink(link: any) {
    if (!link) {
      return;
    }
    window.open(link, '_blank');
  }
}
