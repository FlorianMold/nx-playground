import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  static uniqueId = 3;

  todos: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' }
  ];

  addTodo() {
    this.todos.push({
      title: `Todo ${AppComponent.uniqueId++}`
    })
  }
}
