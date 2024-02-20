import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrl: './basic-info-form.component.scss'
})
export class BasicInfoFormComponent {

  @Input() headerText: string = "Basic Information Form";
  @Output() onClose = new EventEmitter();
  @Output() onSave = new EventEmitter();

}
