import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GameRoom, GameRoomState, Player, Question, User, UserStatus} from './interfaces';
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
  chooseQuestion(roomId: number, categoryId: number, questionId: number): void {
    const currentRoom = this.rooms.find(x => x.id === roomId);
    // const currentQuestion = currentRoom.gameRounds[currentRoom.currentRound].questionCategories.find(x => x.id === categoryId).questions
    //  .find(x => x.id === questionId);
    currentRoom.currentCategoryId = categoryId;
    currentRoom.currentQuestionId = questionId;
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
    return of(currentRoom.gameRounds[currentRoom.currentRound].questionCategories
      .find(x => x.id === currentRoom.currentCategoryId).questions
      .find(x => x.id === currentRoom.currentQuestionId));
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
  answerIsCorrect(roomId: number): void {
    // TODO
    this.hostIsApproving = false;
    this.addScore(roomId);
    this.makeQuestionAnswered(roomId);
    this.changeRoomState(roomId, GameRoomState.AnswerIsShown);
  }
  addScore(roomId: number): void {
    const currentRoom = this.rooms.find(x => x.id === roomId);
    const currentPlayerName = this.rooms.find(x => x.id === roomId).activePlayerName;
    const currentAnswerCost = currentRoom.gameRounds[currentRoom.currentRound].questionCategories
      .find(x => x.id === currentRoom.currentCategoryId).questions
      .find(x => x.id === currentRoom.currentQuestionId).cost;
    this.rooms.find(x => x.id === roomId).players.find(x => x.user.name === currentPlayerName)
      .score += currentAnswerCost;
  }
  subtractScore(roomId: number): void {
    const currentRoom = this.rooms.find(x => x.id === roomId);
    const currentPlayerName = this.rooms.find(x => x.id === roomId).activePlayerName;
    const currentAnswerCost = currentRoom.gameRounds[currentRoom.currentRound].questionCategories
      .find(x => x.id === currentRoom.currentCategoryId).questions
      .find(x => x.id === currentRoom.currentQuestionId).cost;
    this.rooms.find(x => x.id === roomId).players.find(x => x.user.name === currentPlayerName)
      .score -= currentAnswerCost;
  }
  answerIsIncorrect(roomId: number): void {
    // TODO
    this.hostIsApproving = false;
    this.subtractScore(roomId);
  }
  showAnswer(roomId: number): void {
    setTimeout(fn => {
      this.changeRoomState(roomId, GameRoomState.PlayerIsChoosingQuestion);
    }, 3000);
  }
  changeRoomState(roomId: number, newState: GameRoomState) {
    this.rooms.find(x => x.id === roomId).state = newState;
  }
  beginAnswer(roomId: number): void {
    const currentRoom = this.rooms.find(x => x.id === roomId);
    currentRoom.activePlayerName = this.currentUser.name;
    this.changeRoomState(roomId, GameRoomState.PlayerIsAnswering);
  }
  makeQuestionAnswered(roomId: number): void {
    const currentRoom = this.rooms.find(x => x.id === roomId);
    currentRoom.gameRounds[currentRoom.currentRound].questionCategories
      .find(x => x.id === currentRoom.currentCategoryId).questions
      .find(x => x.id === currentRoom.currentQuestionId)
      .answered = true;
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
