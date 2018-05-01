import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'Super-Cool-Selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 4),
    new Task('Begin brainstorming possible JavaScript group projects', 3),
    new Task('Add README file to last few Angular repos on GitHub', 5),
    new Task('Do the dishes', 1),
    new Task('Think of a site or application to recreate for the two week code review', 2)
  ];

  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  priorityColor(currentTask) {
    if(currentTask.priority === 5) {
      return "bg-danger";
    } else if (currentTask.priority === 4) {
      return "bg-warning";
    } else if (currentTask.priority === 3) {
      return "bg-info";
    } else if (currentTask.priority === 2) {
      return "bg-secondary";
    } else {
      return "bg-success";
    }
  }
  finishEditing() {
    this.selectedTask = null;
  }
}
