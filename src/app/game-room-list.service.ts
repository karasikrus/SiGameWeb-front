import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {GameRoom, User, Player} from './interfaces';
import {ROOMS} from './mock-gameRooms';


@Injectable({
  providedIn: 'root'
})
export class GameRoomListService {

  currentUser: User;
  hostIsApproving = true;

  enter(user: User): void {

  }
  getHostApproval(): Observable<boolean>{
    return of(this.hostIsApproving);
  }

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
  createNewRoom(newRoom: GameRoom): number {
    let id: number;
    const room: GameRoom = newRoom;
    // TODO
    return id;
  }
  answerIsCorrect(): void {
    // TODO
    this.hostIsApproving = false;
  }
  answerIsIncorrect(): void {
    // TODO
    this.hostIsApproving = false;
  }
  initiateHostApproval(): void {
    this.hostIsApproving = true;
  }
  enterRoomAsHost(id: number): void {
    // TODO
  }
  enterRoomAsPlayer(id: number): void {
    // TODO
  }



  constructor() { }
}
