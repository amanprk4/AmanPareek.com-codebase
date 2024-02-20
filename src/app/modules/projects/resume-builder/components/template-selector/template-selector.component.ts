import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TemplateDetails } from '../../types/types';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrl: './template-selector.component.scss'
})
export class TemplateSelectorComponent {

  @Input() templateDetails: TemplateDetails;
  @Input() isSelected: boolean;
  
  @Output() onTemplateClick = new EventEmitter<TemplateDetails>();

}
