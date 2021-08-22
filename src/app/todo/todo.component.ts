import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {
  toDoList: any;
  constructor(private todoService: TodoService, private router: Router) {

  }
  ngOnInit(): void {
    this.toDoList = this.todoService.toDoList;
  }
  today = new Date();
  onChangeStatus(i: number) {
    this.todoService.onChangeStatus(i);
  }
  onUpdated(i: number) {
    this.todoService.onUpdated(i);
  }
  onView(id: number) {
    this.router.navigate(["todos", id])
  }
}
