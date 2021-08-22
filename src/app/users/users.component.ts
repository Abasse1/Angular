import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private usersSubscrition = new Subscription;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const usersSubject = this.userService.getUsersSubject();
    this.usersSubscrition = usersSubject.subscribe(
      (usersRecup: User[]) => {
        this.users = usersRecup
      }
    );
    this.userService.emistUsers();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.usersSubscrition.unsubscribe();

  }
}
