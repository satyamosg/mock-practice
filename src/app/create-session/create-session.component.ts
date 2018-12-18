import { Component, OnInit } from '@angular/core';
import { SessionsService, ISession } from '../services/sessions.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(private sessionService: SessionsService) { }

  ngOnInit() {
  }

  onSubmit(session: ISession) {
      this.sessionService.addSession(session);
    }

}
