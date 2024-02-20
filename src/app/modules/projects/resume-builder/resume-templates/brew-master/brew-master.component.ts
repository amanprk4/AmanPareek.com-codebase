import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-brew-master',
  templateUrl: './brew-master.component.html',
  styleUrl: './brew-master.component.scss'
})
export class BrewMasterComponent implements OnInit {
  @Input() informationFormGroup: FormGroup;
  @Output() openForm = new EventEmitter();


  ngOnInit(): void {
  }


  onBasicInfoClick = () => this.openForm.emit(this.informationFormGroup.get('basicInformation'));
  onSocialInfoClick = () => this.openForm.emit(this.informationFormGroup.get('socialInfo'))
}
