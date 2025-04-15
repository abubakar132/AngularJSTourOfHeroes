import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'tour-heroes-root',
  standalone: true,
  imports: [RouterModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Heroic Journey Portal';
}
