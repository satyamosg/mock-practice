import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface ISession {
  topic: string;
  date: string;
  content: string;
  reflections: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})

export class SessionsService {

  sessions: Observable<ISession[]>;
  sessionCollection: AngularFirestoreCollection<ISession>;

  constructor(db: AngularFirestore) {
    this.sessionCollection = db.collection<ISession>('sessions');
  }

  addSession (sessionticles ) {
    const session: ISession = {
      topic: sessionticles.newSession,
      date: sessionticles.sessionDate,
      content: sessionticles.sessionContent,
      reflections: sessionticles.reflections,
      rating: sessionticles.rating
    };
    
    this.sessionCollection.add(session);
  }

  deleteSession(sessionticles: ISession) {
    this.sessionCollection.remove(session);
  }
}
