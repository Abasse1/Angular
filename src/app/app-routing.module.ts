import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoComponent } from './todo/todo.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users.component';

const routes:  Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'todos', component: TodoComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'add-todo', component: AddTodoComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: 'todos/:id', component: SingleTodoComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: '', component: TodoComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
