import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.model";

@Injectable()
export class TodoService {
  toDoList: Todo[];
  constructor() {
    this.toDoList = [
      {
        todoName: "Tache 1",
        todoStatus: false,
        todoImage: "http://placeimg.com/300/200/tech",
        isModif: false
      },
      {
        todoName: "Tache 2",
        todoStatus: true,
        todoImage: "http://placeimg.com/300/300/tech",
        isModif: false
      },
      {
        todoName: "Tache 3",
        todoStatus: false,
        todoImage: "http://placeimg.com/300/400/tech",
        isModif: false
      },
      {
        todoName: "Tache 4",
        todoStatus: true,
        todoImage: "http://placeimg.com/300/600/tech",
        isModif: false
      }
    ];
  }


  onChangeStatus(i: number) {
    this.toDoList[i].todoStatus = !this.toDoList[i].todoStatus;
  }
  onUpdated(i: number) {
    this.toDoList[i].isModif = !this.toDoList[i].isModif;
  }

  getTodo(index: number) {
    if (this.toDoList[index]) {
      return this.toDoList[index]
    }
    return false;
  }

  addTodo(todo: Todo) {
    this.toDoList.unshift(todo);
  }
}
