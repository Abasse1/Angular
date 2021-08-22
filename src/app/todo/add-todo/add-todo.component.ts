import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo = new Todo();
  constructor(private service: TodoService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(todo: Todo) {
    this.service.addTodo(todo);
    this.route.navigate(["todos"]);
  }
}
