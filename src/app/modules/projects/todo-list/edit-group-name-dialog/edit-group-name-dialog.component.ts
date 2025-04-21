import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-group-name-dialog',
  templateUrl: './edit-group-name-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EditGroupNameDialog {
  constructor(
    public dialogRef: MatDialogRef<EditGroupNameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { groupName: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
} 