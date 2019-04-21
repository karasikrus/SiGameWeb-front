import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {GameRoom} from './interfaces';
import {ROOMS} from './mock-gameRooms';


@Injectable({
  providedIn: 'root'
})
export class GameRoomListService {
  getRooms(): Observable<GameRoom[]> {
    return of(ROOMS);
  }


  constructor() { }
}
