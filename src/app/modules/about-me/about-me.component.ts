import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

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
  
  images = [
    'pic_1.jpg',
    'resume_pic.jpeg',
    'IMG_9096.jpg',
    'IMG_5947.JPG',
    'IMG_5934 (1).JPG',
    'IMG_5916.JPG',
    'BB868EDD-E30A-4B5E-92F4-830D48C09326.jpg',
    '1000100539 (1).jpg',
    '1000057004.jpg',
    '180d4040-45ba-4e84-8b9e-c5415da82ac5.jpg',
    '4D976999-0EF2-47FF-92FA-BE8BD0DC78D4.jpeg'
  ];

  radioButtons = [
    { value: 'short', displayValue: 'Short Bio' },
    { value: 'medium', displayValue: 'Medium Bio' },
    { value: 'long', displayValue: 'Long Bio' }
  ];

  aboutMeBio: Record<'short' | 'medium' | 'long', string> = {
    short: `Hi! I'm <em>Aman Pareek</em>, a passionate <em>Frontend Developer</em> with 6 years of experience crafting beautiful and performant web applications. I specialize in <em>Angular</em> and <em>React</em>, with a strong focus on creating intuitive user experiences.`,
    medium: `Hi! I'm <em>Aman Pareek</em>, a passionate <em>Frontend Developer</em> with 6 years of experience crafting beautiful and performant web applications. I specialize in <em>Angular</em> and <em>React</em>, with a strong focus on creating intuitive user experiences. My journey in web development started with a curiosity about how things work on the internet, which led me to dive deep into frontend technologies. I believe in writing clean, maintainable code and staying updated with the latest web development trends.`,
    long: `Hi! I'm <em>Aman Pareek</em>, a passionate <em>Frontend Developer</em> with 6 years of experience crafting beautiful and performant web applications. I specialize in <em>Angular</em> and <em>React</em>, with a strong focus on creating intuitive user experiences. My journey in web development started with a curiosity about how things work on the internet, which led me to dive deep into frontend technologies. I believe in writing clean, maintainable code and staying updated with the latest web development trends. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community. I'm always excited to take on new challenges and learn from every experience.`
  };

  ngOnInit(): void {
    // Load a random image on initialization
    this.loadRandomImage();
    // Preload all images
    this.preloadImages();
  }

  private loadRandomImage(): void {
    this.currentImageIndex = Math.floor(Math.random() * this.images.length);
  }

  private preloadImages(): void {
    this.isLoading = true;
    let loadedCount = 0;
    
    this.images.forEach(imageName => {
      const img = new Image();
      img.src = `../../../assets/images/${imageName}`;
      
      img.onload = () => {
        this.preloadedImages[imageName] = img;
        loadedCount++;
        
        // When all images are loaded, set isLoading to false
        if (loadedCount === this.images.length) {
          this.isLoading = false;
        }
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${imageName}`);
        loadedCount++;
        
        // Even if some images fail, we still want to show the slider
        if (loadedCount === this.images.length) {
          this.isLoading = false;
        }
      };
    });
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
