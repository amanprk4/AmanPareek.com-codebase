import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input() iconClass = '';
  @Input() buttonName = '';
  @Input() linkToOpen = '';
  @Output() onButtonClickEvent = new EventEmitter();

  onButtonClick() {
    if (this.linkToOpen) {
      window.open(this.linkToOpen, '_blank');
      return;
    }
    this.onButtonClickEvent.emit();
  }
}
