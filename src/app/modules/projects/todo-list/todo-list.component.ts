import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectionStrategy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { CustomHeaderLinkComponent } from '../../../shared/components/custom-header-link/custom-header-link.component';
import { CustomHeaderLink } from '../../../interfaces/custom-header-link.interface';
import { SharedModule } from '../../../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { EditGroupNameDialog } from './edit-group-name-dialog/edit-group-name-dialog.component';
import { TodoDetailsDialog } from './todo-details-dialog/todo-details-dialog.component';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
  color: string;
  completedAt?: Date;
  showDetails?: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomHeaderLinkComponent, SharedModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  todos: Todo[] = [];
  newTodoText: string = '';
  private isBrowser: boolean;
  selectedColor: string = 'blue';
  readonly maxTextLength = 500;
  canScrollLeft = false;
  canScrollRight = false;
  private readonly scrollAmount = 300;

  readonly colors = [
    { name: 'blue', class: 'bg-blue-100 border-blue-500' },
    { name: 'green', class: 'bg-green-100 border-green-500' },
    { name: 'yellow', class: 'bg-yellow-100 border-yellow-500' },
    { name: 'red', class: 'bg-red-100 border-red-500' },
    { name: 'purple', class: 'bg-purple-100 border-purple-500' },
    { name: 'pink', class: 'bg-pink-100 border-pink-500' },
    { name: 'orange', class: 'bg-orange-100 border-orange-500' },
    { name: 'teal', class: 'bg-teal-100 border-teal-500' }
  ];

  headerLinkItems: CustomHeaderLink[] = [
    {
      name: 'All Projects',
      isActive: false,
      routeLink: '/home/projects'
    },
    {
      name: 'Todo List',
      isActive: true
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  ngAfterViewInit(): void {
    this.checkScrollability();
  }

  onScroll(): void {
    this.checkScrollability();
  }

  checkScrollability(): void {
    if (!this.scrollContainer) return;

    const element = this.scrollContainer.nativeElement;
    this.canScrollLeft = element.scrollLeft > 0;
    this.canScrollRight = element.scrollLeft < element.scrollWidth - element.clientWidth;
    this.cdr.detectChanges();
  }

  scrollLeft(): void {
    if (!this.scrollContainer) return;
    const element = this.scrollContainer.nativeElement;
    element.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    if (!this.scrollContainer) return;
    const element = this.scrollContainer.nativeElement;
    element.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });
  }

  loadTodos(): void {
    if (this.isBrowser) {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    }
  }

  saveTodos(): void {
    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(): void {
    if (this.newTodoText.trim() && this.newTodoText.length <= this.maxTextLength) {
      const newTodo: Todo = {
        id: Date.now(),
        text: this.newTodoText.trim(),
        completed: false,
        createdAt: new Date(),
        color: this.selectedColor
      };
      this.todos = [newTodo, ...this.todos];
      this.newTodoText = '';
      this.saveTodos();
      this.checkScrollability();
    }
  }

  toggleTodo(todo: Todo): void {
    todo.completed = !todo.completed;
    if (todo.completed) {
        todo.completedAt = new Date();
    } else {
        todo.completedAt = undefined;
    }
    this.todos = [...this.todos];
    this.saveTodos();
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
    this.checkScrollability();
  }

  clearAllTodos(): void {
    this.todos = [];
    this.saveTodos();
    this.checkScrollability();
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }

  getColorClass(color: string): string {
    return this.colors.find(c => c.name === color)?.class || this.colors[0].class;
  }

  getGroupedTodos(): { color: string; todos: Todo[] }[] {
    const grouped = this.todos.reduce((acc, todo) => {
      if (!acc[todo.color]) {
        acc[todo.color] = [];
      }
      acc[todo.color].push(todo);
      return acc;
    }, {} as { [key: string]: Todo[] });

    return Object.entries(grouped).map(([color, todos]) => ({
      color,
      todos: todos.sort((a, b) => Number(a.completed) - Number(b.completed))
    }));
  }

  getCompletionStats(): { completed: number; total: number; percentage: number } {
    const total = this.todos.length;
    const completed = this.todos.filter(todo => todo.completed).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  }

  updateGroupName(event: Event, group: { color: string; todos: Todo[] }): void {
    const newName = (event.target as HTMLInputElement).value.trim();
    if (newName) {
      group.color = newName;
      this.saveTodos();
    }
  }

  getCompletedCount(todos: Todo[]): number {
    return todos.filter(todo => todo.completed).length;
  }

  openEditModal(group: { color: string; todos: Todo[] }): void {
    const dialogRef = this.dialog.open(EditGroupNameDialog, {
      width: '250px',
      data: { groupName: group.color }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result !== group.color) {
        const oldColor = group.color;
        group.color = result;

        group.todos.forEach(todo => {
          if (todo.color === oldColor) {
            todo.color = result;
          }
        });

        this.saveTodos();
        this.cdr.detectChanges();
      }
    });
  }

  toggleDetails(todo: Todo): void {
    todo.showDetails = !todo.showDetails;
  }

  openTodoDetails(todo: Todo): void {
    this.dialog.open(TodoDetailsDialog, {
      width: '400px',
      data: {
        text: todo.text,
        createdAt: todo.createdAt,
        completedAt: todo.completedAt
      }
    });
  }
} 