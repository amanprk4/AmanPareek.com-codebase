import { Component, Input } from '@angular/core';
import { CustomHeaderLink } from '../../types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-header-link',
  templateUrl: './custom-header-link.component.html',
})
export class CustomHeaderLinkComponent {
  @Input() headerLinkItems: CustomHeaderLink[];

  constructor(private router: Router) {}
  goToURL(url: string | undefined) {
    if(url)
    this.router.navigateByUrl(url);
  }
}
