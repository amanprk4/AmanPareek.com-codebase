import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { ModalHolderComponent } from './components/modal-holder/modal-holder.component';

@NgModule({
  declarations: [HeaderComponent,LoaderComponent,CustomButtonComponent,ModalHolderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    CustomButtonComponent,
    ModalHolderComponent
  ]
})
export class SharedModule { }
