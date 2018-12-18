import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ISession, ISessionID, SessionsService } from '../services/sessions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

sessions: Observable<ISession[]> 

  constructor (private sessionService: SessionsService) {
    this.sessions = this.sessionService.sessions;
    
  }

  ngOnInit() {
  }

  onDelete(session: ISessionID) {
    this.sessionService.deleteSession(session)
  }
}
