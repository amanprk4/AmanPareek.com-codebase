import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-martini-maven',
  templateUrl: './martini-maven.component.html',
  styleUrl: './martini-maven.component.scss'
})
export class MartiniMavenComponent {
  @Input() informationFormGroup: FormGroup;
}
