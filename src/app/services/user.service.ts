import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private usersSubject = new Subject<User[]>();
  constructor() { }

  addUser(user: User): void {
    this.users.unshift(user);
    this.emistUsers();
  }
  emistUsers(): void {
    this.usersSubject.next(this.users);
  }
  getUsers(): User[] {
    return this.users;
  }
  getUsersSubject(): Subject<User[]> {
    return this.usersSubject;
  }
}
