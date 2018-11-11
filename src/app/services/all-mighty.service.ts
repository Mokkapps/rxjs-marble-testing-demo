import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AllMightyService {
  get getModifiedUsers(): Observable<string> {
    return this.userService.getUsers.pipe(map(user => `Mighty ${user}`));
  }

  constructor(private userService: UserService) {}
}
