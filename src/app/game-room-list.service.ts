import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GameRoom, Player, Question, User, UserStatus} from './interfaces';
import {ROOMS} from './mock-gameRooms';


@Injectable({
  providedIn: 'root'
})

export class GameRoomListService {


  currentUser: User;
  hostIsApproving = true;
  userStatus: UserStatus = UserStatus.Noone;
  rooms: GameRoom[];

  initiateRooms(): void { // TODO this should get data from server
    of(ROOMS)
      .subscribe(x => this.rooms = x);
  }

  enter(user: User): void {
    this.currentUser = user;
    this.initiateRooms();
  }

  getHostApproval(): Observable<boolean> {
    return of(this.hostIsApproving);
  }
  getCurrentQuestion(roomId: number): Observable<Question> {
    const currentRoom: GameRoom = this.rooms.find(x => x.id === roomId);
    return of(currentRoom.gameRounds[currentRoom.currentRound].questionCategories.find(x => x.id === currentRoom.currentCategoryId).questions.find(x => x.id === currentRoom.currentQuestionId));
  }

  getRooms(): Observable<GameRoom[]> {
    return of(this.rooms);
  }
  getRoom(id: number): Observable<GameRoom> {
    return of (this.rooms.find(x => x.id === id));
  }
  getHost(id: number): Observable<User> {
    return of (this.rooms.find(x => x.id === id).host);
  }
  getPlayers(id: number): Observable<Player[]> {
    return of (this.rooms.find(x => x.id === id).players);
  }
  createNewRoom(newRoom: GameRoom): number {
    let id = 0;
    const room: GameRoom = newRoom;
    let index = this.rooms.findIndex(x => x.id === id);
    while (index !== -1) {
      id++;
      index = this.rooms.findIndex(x => x.id === id);
    }
    room.id = id;
    this.rooms.push(room);
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
    this.rooms.find(x => x.id === id).host = this.currentUser;
  }
  enterRoomAsPlayer(id: number): void {
    this.rooms.find(x => x.id === id).players.push({user: this.currentUser, score: 0});
  }



  constructor() { }
}
