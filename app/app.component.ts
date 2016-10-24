import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    message: string = 'Hello!';
    users: User[]= [
        { id: 25, name: "chris", username: "seviliayha" },
        { id: 26, name: "nick", username: "whatnicktweet" },
        { id: 27, name: "holly", username: "hollylayly" }
    ];
    activeUser: User;

    selectUser(user){
        this.activeUser = user;
    }

    onUserCreated(event){
        this.users.push(event.user);
    }
}
