import { Component, Input, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seo',
  template: '',
})
export class SeoComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() keywords: string = '';

  constructor(
    protected seoService: SeoService,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.updateSeoData();
  }

  protected updateSeoData(): void {
    if (this.title && this.description) {
      const url = `https://amanpareek.com${this.router.url}`;
      
      this.seoService.setSeoData({
        title: this.title,
        description: this.description,
        image: this.image,
        url: url,
        keywords: this.keywords
      });
    }
  }
} 