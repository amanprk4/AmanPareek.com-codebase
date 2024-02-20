import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gin-genius',
  templateUrl: './gin-genius.component.html',
  styleUrl: './gin-genius.component.scss'
})
export class GinGeniusComponent {
  @Input() informationFormGroup: FormGroup;
}
