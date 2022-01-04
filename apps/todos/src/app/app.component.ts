import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  todos: Todo[] = [];

  constructor(private httpClient: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.httpClient.get<Todo[]>('/api/todos').subscribe(t => this.todos = t);
  }

  addTodo() {
    this.httpClient.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    })
  }
}
