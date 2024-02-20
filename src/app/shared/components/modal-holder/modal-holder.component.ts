import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-holder',
  templateUrl: './modal-holder.component.html',
  styleUrl: './modal-holder.component.scss'
})
export class ModalHolderComponent {
  @Input() headerText: string;
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

}
