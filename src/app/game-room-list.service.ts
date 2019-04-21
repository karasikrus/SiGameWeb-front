import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {GameRoom, User, Player} from './interfaces';
import {ROOMS} from './mock-gameRooms';


@Injectable({
  providedIn: 'root'
})
export class GameRoomListService {
  getRooms(): Observable<GameRoom[]> {
    return of(ROOMS);
  }
  getRoom(id: number): Observable<GameRoom> {
    return of (ROOMS.find(x => x.id === id));
  }
  getHost(id: number): Observable<User> {
    return of (ROOMS.find(x => x.id === id).host);
  }
  getPlayers(id: number): Observable<Player[]> {
    return of (ROOMS.find(x => x.id === id).players);
  }


  constructor() { }
}
