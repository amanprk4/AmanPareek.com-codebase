import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { SeoService } from '../../core/services/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  animations: [
    trigger('fadeInOutState', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('inRight', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('outRight', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition('out => in', [
        animate('500ms ease-out')
      ]),
      transition('in => out', [
        animate('500ms ease-in')
      ]),
      transition('outRight => inRight', [
        animate('500ms ease-out')
      ]),
      transition('inRight => outRight', [
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class AboutMeComponent implements OnInit {
  selectedBioLength: 'short' | 'medium' | 'long' = 'short';
  currentImageIndex = 0;
  slideDirection: 'left' | 'right' = 'right';
  preloadedImages: { [key: string]: HTMLImageElement } = {};
  isLoading = true;
  animationState = 'inRight';
  
  // Shuffled images array
  images = [
    'resume_pic.jpeg',
    'IMG_9096.jpg',
    'pic_1.jpg',
    'IMG_5947.JPG',
    '1000100539 (1).jpg',
    'IMG_5934 (1).JPG',
    'IMG_5916.JPG',
    'BB868EDD-E30A-4B5E-92F4-830D48C09326.jpg',
    '1000057004.jpg',
    '180d4040-45ba-4e84-8b9e-c5415da82ac5.jpg',
    '4D976999-0EF2-47FF-92FA-BE8BD0DC78D4.jpeg',
    '1000070095.jpg'
  ];

  radioButtons = [
    { value: 'short', displayValue: 'Short Bio' },
    { value: 'medium', displayValue: 'Medium Bio' },
    { value: 'long', displayValue: 'Long Bio' }
  ];

  aboutMeBio: Record<'short' | 'medium' | 'long', string> = {
    short: `Hi, I'm <em>Aman Pareek</em> — a <em>Frontend Developer</em> with 6+ years of experience building sleek, high-performance web apps using <em>Angular</em> and <em>React</em>. I'm passionate about clean code, great UX, and always exploring what's next in web tech.`,
    medium: `Hello, I'm <em>Aman Pareek</em>—a dedicated <em>Frontend Developer</em> with six years of hands-on experience in <em>Angular</em> and <em>React</em>. My journey began with a deep curiosity for how the web works, which evolved into a commitment to craft clean, maintainable code and innovative user experiences. I thrive on tackling challenging projects, exploring emerging trends, and collaborating with creative teams to bring ideas to life.`,
    long: `Hi there! I'm <em>Aman Pareek</em>, a seasoned <em>Frontend Developer</em> driven by creativity and a relentless passion for design. With six years of experience under my belt, I specialize in <em>Angular</em> and <em>React</em>, focusing on transforming complex requirements into polished, user-friendly interfaces. My journey started from a simple wonder about the inner workings of the internet and has since evolved into a deep commitment to excellence in coding and design. I'm committed to writing clean, scalable code while staying ahead of the curve by constantly learning new technologies and trends. Beyond coding, I enjoy contributing to open-source projects, engaging with the developer community, and speaking at meetups where ideas flourish. Whether you're looking for intuitive user experiences or a collaborative spirit to overcome complex challenges, I'm always ready to innovate and elevate digital experiences.`
  };

  constructor(
    private seoService: SeoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Load a random image on initialization
    this.loadRandomImage();
    
    // Set SEO metadata
    this.updateSeoData();
    
    // Start preloading images in the background
    setTimeout(() => {
      this.preloadImages();
    }, 0);
  }

  private updateSeoData(): void {
    const title = 'About Aman Pareek | Frontend Developer';
    const description = 'Learn about Aman Pareek, a passionate Frontend Developer with 6 years of experience in Angular and React. Discover my journey, skills, and expertise in web development.';
    const image = 'https://amanpareek.com/assets/images/resume_pic.jpeg';
    const url = `https://amanpareek.com${this.router.url}`;
    const keywords = 'Aman Pareek, Frontend Developer, Angular, React, Web Development, Portfolio';
    
    this.seoService.setSeoData({
      title,
      description,
      image,
      url,
      keywords
    });
  }

  private loadRandomImage(): void {
    this.currentImageIndex = Math.floor(Math.random() * this.images.length);
  }

  private preloadImages(): void {
    this.isLoading = true;
    let loadedCount = 0;
    
    // Prioritize loading the current image first
    const currentImage = this.images[this.currentImageIndex];
    this.loadImage(currentImage, () => {
      loadedCount++;
      this.isLoading = false; // Allow the slider to be interactive after the first image loads
      
      // Then load the rest of the images in the background
      this.images.forEach((imageName, index) => {
        if (index !== this.currentImageIndex) {
          this.loadImage(imageName, () => {
            loadedCount++;
          });
        }
      });
    });
  }
  
  private loadImage(imageName: string, callback: () => void): void {
    const img = new Image();
    img.src = `../../../assets/images/${imageName}`;
    
    img.onload = () => {
      this.preloadedImages[imageName] = img;
      callback();
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${imageName}`);
      callback();
    };
  }

  getDefaultRadioSelect(value: string): boolean {
    return value === this.selectedBioLength;
  }

  changeBioLength(event: any): void {
    this.selectedBioLength = event.value;
  }

  nextImage(): void {
    if (this.isLoading) return;
    
    this.slideDirection = 'right';
    this.animationState = 'outRight';
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.animationState = 'inRight';
    }, 50);
  }

  previousImage(): void {
    if (this.isLoading) return;
    
    this.slideDirection = 'left';
    this.animationState = 'out';
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.animationState = 'in';
    }, 50);
  }

  getCurrentImage(): string {
    return `../../../assets/images/${this.images[this.currentImageIndex]}`;
  }
}
