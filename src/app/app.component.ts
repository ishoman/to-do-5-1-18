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
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub'),
    new Task('Do the dishes'),
    new Task('Think of a site or application to recreate for the two week code review')
  ];
}
