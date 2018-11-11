import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MarbleDemo';

  users: string[] = [];

  private subscription: Subscription | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.getUsers.subscribe(user => {
      this.users.push(user);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
