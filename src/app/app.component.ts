import { Component } from '@angular/core';
import { User } from './01-content-projection/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  createUser(user: User): void {
    console.log(user);
  }
}
