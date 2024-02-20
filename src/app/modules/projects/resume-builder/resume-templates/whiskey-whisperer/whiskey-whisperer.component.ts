import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-whiskey-whisperer',
  templateUrl: './whiskey-whisperer.component.html',
  styleUrl: './whiskey-whisperer.component.scss'
})
export class WhiskeyWhispererComponent {
  @Input() informationFormGroup: FormGroup;
}
