import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-details-dialog',
  templateUrl: './todo-details-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule
  ]
})
export class TodoDetailsDialog {
  constructor(
    public dialogRef: MatDialogRef<TodoDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { text: string; createdAt: Date; completedAt?: Date }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
} 