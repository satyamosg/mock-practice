import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface ISession {
  userID;
  topic: string;
  date: string;
  content: string;
  reflections: string;
  rating: number;
}

export class SessionsService {

  constructor() { }
}
