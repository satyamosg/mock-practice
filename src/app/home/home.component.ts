import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'mock-practice';

  sessions: Observable<any[]>

  constructor (db: AngularFirestore) {
    this.sessions = db.collection('sessions').valueChanges();
  }

  ngOnInit() {
  }

}
