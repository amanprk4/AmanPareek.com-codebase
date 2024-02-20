import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wine-wizardry',
  templateUrl: './wine-wizardry.component.html',
  styleUrl: './wine-wizardry.component.scss'
})
export class WineWizardryComponent {
  @Input() informationFormGroup: FormGroup;
}
