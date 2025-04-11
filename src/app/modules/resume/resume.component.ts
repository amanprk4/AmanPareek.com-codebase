import { Component } from '@angular/core';

interface Experience {
  companyName: string;
  link: string;
  companyInfo: string;
  location: string;
  title: string;
  joinedFrom: string;
  joinedTill: string;
  duration: string;
  learnings: string[];
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  skillsList = [
    'Angular',
    'React',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'CSS',
    'RxJS',
    'Node.js',
    'Express.js',
    'Nx Workspace',
    'Git',
    'Jira',
    'Jest',
    'Web Performance Optimization',
    'Signals',
    'Component Libraries',
    'Next.js',
    'Bootstrap',
    'Material UI',
    'RESTful APIs',
    'Cross-Browser Compatibility',
    'Testing & Debugging',
    'Agile Development Practices'
  ];

  interestList = [
    'Gaming',
    'Road trips',
    'Traveling',
    'Trekking',
    'Marvels/DC fan',
  ];

  experienceList: Experience[] = [
    {
      companyName: 'Zeotap',
      link: 'https://zeotap.com/',
      companyInfo: `Helps in business's need to deliver data-driven customer experiences
      and hand-in-hand with the protection of their user's interests.`,
      location: 'Bangalore, Karnataka, India',
      title: 'Senior Software Engineer',
      joinedFrom: '12/2021',
      joinedTill: 'Present',
      duration: this.calculateDuration('12/2021', 'Present'),
      learnings: [
        `Spearheaded legacy code's <em>Angular upgrade to v17</em>, enhancing application performance and enabling the use of Signals.`,
        `Built a <em>BFF Layer</em> to streamline API communication, reducing complexity and improving maintainability.`,
        `Developed an <em>AI-powered feature</em> for customer segmentation, increasing user engagement by 15%.`,
        `Designed and implemented a <em>custom library of reusable UI components</em>, accelerating development cycles by 30%.`,
        `Mentored 2 engineers and provided technical guidance to interns, fostering a culture of collaboration and learning.`,
        `Led the migration to <em>Nx workspace</em>, optimizing project organization and build performance.`,
        `Initiated the adoption of <em>Tailwind CSS</em>, improving UI consistency and development efficiency.`
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
        `Engineered an in-house <em>Pricing Tool</em> to automate incoming project revenue calculations, resulting in a <em>60% reduction in manual effort and time</em>. This significantly streamlined financial project approvals.`,
        `Innovated a <em>Valuation & Benchmarking Tool</em> for financial clients, enhancing efficiency by <em>50%</em> and expanding user reach by <em>20%</em>.`,
        `Designed an in-house <em>Sentiment Analysis Tool</em> for the HR team, providing a flexible platform for obtaining anonymous employee feedback. This initiative increased response rates from <em>30-40% to nearly 100%</em>.`,
        `Orchestrated the end-to-end development life cycle of over <em>8 web applications within 2 years</em>, including planning, development, testing, deployment, and ongoing maintenance.`,
        `Led performance optimization initiatives for multiple web applications, reducing load times by <em>40%</em> and improving overall user experience across diverse client platforms.`
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

  private calculateDuration(fromDate: string, toDate: string): string {
    if (toDate === 'Present') {
      const [month, year] = fromDate.split('/');
      const startDate = new Date(parseInt(year), parseInt(month) - 1);
      const currentDate = new Date();
      
      const years = currentDate.getFullYear() - startDate.getFullYear();
      const months = currentDate.getMonth() - startDate.getMonth();
      
      let totalMonths = years * 12 + months;
      if (currentDate.getDate() < startDate.getDate()) {
        totalMonths--;
      }
      
      const calculatedYears = Math.floor(totalMonths / 12);
      const calculatedMonths = totalMonths % 12;
      
      return `${calculatedYears} year${calculatedYears !== 1 ? 's' : ''}, ${calculatedMonths} month${calculatedMonths !== 1 ? 's' : ''}`;
    }
    return '0 years, 0 months'; // Default return for non-present dates
  }

  openCompanyLink(link: string) {
    if (!link) {
      return;
    }
    window.open(link, '_blank');
  }
}
