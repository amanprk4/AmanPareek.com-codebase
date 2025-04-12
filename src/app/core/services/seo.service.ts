import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  /**
   * Update the page title
   * @param title The page title
   */
  updateTitle(title: string): void {
    this.title.setTitle(`${title} | Aman Pareek`);
  }

  /**
   * Update meta description
   * @param description The meta description
   */
  updateDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  /**
   * Update Open Graph tags for social media sharing
   * @param title The page title
   * @param description The page description
   * @param image The image URL
   * @param url The page URL
   */
  updateOpenGraphTags(title: string, description: string, image?: string, url?: string): void {
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    
    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
    }
    
    if (url) {
      this.meta.updateTag({ property: 'og:url', content: url });
    }
  }

  /**
   * Update Twitter Card tags
   * @param title The page title
   * @param description The page description
   * @param image The image URL
   */
  updateTwitterTags(title: string, description: string, image?: string): void {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    
    if (image) {
      this.meta.updateTag({ name: 'twitter:image', content: image });
    }
  }

  /**
   * Update canonical URL
   * @param url The canonical URL
   */
  updateCanonicalUrl(url: string): void {
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ rel: 'canonical', href: url });
  }

  /**
   * Set comprehensive SEO metadata for a page
   * @param data SEO data object
   */
  setSeoData(data: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
  }): void {
    this.updateTitle(data.title);
    this.updateDescription(data.description);
    this.updateOpenGraphTags(data.title, data.description, data.image, data.url);
    this.updateTwitterTags(data.title, data.description, data.image);
    
    if (data.url) {
      this.updateCanonicalUrl(data.url);
    }
    
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }
  }
} 