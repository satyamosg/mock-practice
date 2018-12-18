import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ISession {
  topic: string;
  date: string;
  content: string;
  reflections: string;
  rating: number;
}

export interface ISessionID extends ISession {
  id: string;
}

@Injectable({
  providedIn: 'root'
})

export class SessionsService {

  sessions: Observable<ISession[]>;
  sessionCollection: AngularFirestoreCollection<ISession>;
  user;

  constructor(private db: AngularFirestore ) {
    this.sessionCollection = this.db.collection<ISession>('sessions');
  
    this.sessions = this.sessionCollection.snapshotChanges()
    .pipe(map(this.includeCollectionID));
  }

  includeCollectionID(docChangeAction) {
    return docChangeAction.map((a) => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {id, ...data };
    })
  };

  addSession (sessionticles ) {
    const session: ISession = {
      topic: sessionticles.newSession,
      date: sessionticles.sessionDate,
      content: sessionticles.sessionContent,
      reflections: sessionticles.reflections,
      rating: sessionticles.rating,
    };
    
    this.sessionCollection.add(session);
  }

  deleteSession(sessionticles: ISessionID) {
    this.sessionCollection.doc(sessionticles.id).delete();
  }
}
