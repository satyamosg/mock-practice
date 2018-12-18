import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ISession, SessionsService } from '../services/sessions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions: Observable<ISession[]>
  sessionCollection: AngularFirestoreCollection<ISession>;

  constructor (db: AngularFirestore, sessionService: SessionsService) {
    this.sessionCollection = db.collection<ISession>('sessions');
    this.sessions = this.sessionCollection.valueChanges();
  }

  ngOnInit() {
  }

  onDelete() {
    this.sessionService.deleteSession()
  }
}
