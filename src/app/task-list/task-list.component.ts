import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TitleColorPipe } from '../pipes/title-color.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,TitleColorPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  
  tasks: { id: number; title: string; dueDate: string }[] = [
    { id: 1, title: 'Apprendre Angular', dueDate: '2026-11-14' },
    { id: 2, title: ' TP', dueDate: '2026-11-15' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-16' }
  ];

}
